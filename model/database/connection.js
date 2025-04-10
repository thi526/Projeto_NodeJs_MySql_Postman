const mysql = require('mysql2/promise');

// Cria um pool de conexões com o banco de dados
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'MASTER',
  password: 'SenhaSegura@123',
  database: 'NodeJs_MySql1',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Exporta o pool para ser usado nos repositórios
module.exports = pool;
