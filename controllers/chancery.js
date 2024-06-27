import { pool } from '../db/connection';

const conn = pool('chancery');

async function executeSQL(sql) {
  let results
  try {
    results = await conn.promise().query(sql);
  } catch (err) {
    console.log(err)
  }

  return results
}

module.exports = {
  executeSQL,
}