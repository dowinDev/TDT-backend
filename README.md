# 🚀 Welcome to my project
## 📦 Installation
```bash
  npm install
  ```
## 🛠️ Create .env file
- create a .env file in the root directory
- **example**:
```bash
  PORT=3000
  DB_HOST=localhost
  DB_USER=postgres
  DB_PASS=123456
  DB_NAME=postgres
  DB_PORT=5432
  ```
## 📚 Libraries 
- need to install the following libraries
```bash
  npm install body-parser^1.20.3
  npm install cookie-parser^1.4.6
  npm install cors^2.8.5
  npm install debug^4.3.7
  npm install dotenv^16.4.5
  npm install express^4.21.0
  npm install http-errors^2.0.0
  npm install morgan^1.10.0
  npm install pg^8.13.0
  npm install pg-hstore^2.3.4
  npm install reflect-metadata^0.2.2
  npm install sequelize^6.37.3
  npm install swagger-jsdoc^7.0.0
  npm install swagger-ui-express^4.1.6
  npm install bcrypt^5.0.1 
  ```

## 🚀 Run Locally
```bash
  npm start
  ```

## 🚀 Run Locally with nodemon
```bash
  node bin/www
  ```
stop the server by pressing `Ctrl + C`
or
```bash
  netstat -ano | findstr :3000
  ```
Paste the PID number in the following command
```bash
   TCP    0.0.0.0:3000           0.0.0.0:0              LISTENING       12345
  ```
and run the following command
```bash
  taskkill /PID 12345 /F
  ```
## 📝 Documentation
- [Postman Documentation](https://documenter.getpostman.com/view/12345678/TzJx9z1A)
- [Swagger Documentation](http://localhost:3000/api-docs)
- [API Documentation](http://localhost:3000/api-docs)
