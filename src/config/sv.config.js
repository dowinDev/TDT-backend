require('dotenv').config();

module.exports = {
    server: {
        port: process.env.SV_PORT,
        host: process.env.SV_HOST,
    }
}