var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

pool.getConnection(function (error, connection) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Connected!:)");
  }
});

module.exports = pool;