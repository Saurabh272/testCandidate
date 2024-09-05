const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'database_name',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool.promise();