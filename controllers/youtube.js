import { pool } from '../db/connection';
const conn = pool('random_facts');

export async function executeSQL(sql) {
  let results
  try {
    results = await conn.promise().query(sql);
  } catch (err) {
    console.log(err)
  }

  return results
}
