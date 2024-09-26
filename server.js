const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('./src/config/sv.config');
const connection = require('./src/db/connection');
const {} = require('./src/router/index');

require('dotenv').config();
const server = express();

const host = config.server.host;
const port = config.server.port;

const corsOptions = {
    origin: `https://${host}:${port}`
};

server.use(cors(corsOptions));

// middleware
server.use(bodyParser.json());

// Use morgan for logging HTTP requests
server.use(logger('dev'));
// Parse incoming JSON requests
server.use(express.json());
// Parse URL-encoded data with the querystring library
server.use(express.urlencoded({ extended: false }));
// Parse Cookie header and populate req.cookies
server.use(cookieParser());

// simple route


// error handler
server.on('error', onError);

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;  // Nếu không phải lỗi listen, ném ra lỗi
    }
    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    // Xử lý các lỗi cụ thể
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);  // Thoát với mã lỗi 1
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);  // Thoát với mã lỗi 1
            break;
        default:
            throw error;  // Ném ra lỗi khác
    }
}

//connection database and server
connection.sequelize.sync({alter:true}).then(() => {
    server.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = server;
