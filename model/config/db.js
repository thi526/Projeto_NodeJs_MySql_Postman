require('dotenv').config();

module.exports = {
  host: process.env.DB_HOST,        // 127.0.0.1
  user: process.env.DB_USER,        // MASTER
  password: process.env.DB_PASSWORD, // SenhaSegura@123
  database: process.env.DB_NAME,    // NodeJs_MySql1
  port: process.env.DB_PORT || 3306, // 3306
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};