// const mysql = require('mysql2')
import mysql from 'mysql2'
// const path = require('path')
// require('dotenv').config({ 
//   path: path.resolve('.env')
// })
import 'dotenv/config';

const DBCONFIG = {
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPWD,
}

// const databases = [
//   aliens, phxcmd, ntt, finance, random_facts, torrents, law, chancery, food, facebook, 
// ]

// const aliens = mysql.createPool({
//   ...DBCONFIG, database: 'aliens', 
//   waitForConnections: true
// })


export const pool = (db) => mysql.createPool({...DBCONFIG, database: db, waitForConnections: true})
export const formatSQL = (SQL, parameters) => mysql.format(SQL, parameters)

module.exports = {
  pool,
  formatSQL
}
