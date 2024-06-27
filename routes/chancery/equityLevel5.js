const { executeSQL } = require('../../controllers/chancery')

export const equityLevel5 = {
  path: '/texts/equity/level5/:id',
  method: 'get',
  handler: async (req, res) => {
    let sql
    if (req.params.id) {
      sql = `SELECT * FROM equity_texts_tocs_lv5 WHERE equity_txt_lv4_id = ${req.params.id}`;
    }

    try {
      const [rows, fields] = await executeSQL(sql)
      const data ={
        total_level5_results: rows.length,
        rows
      }
      res.json(data)
    } catch(err) {
      console.log(err)
    }
  }
}