const { executeSQL } = require('../../controllers/chancery')

export const equityLevel13 = {
  path: '/chancery/texts/equity/level13/:id',
  method: 'get',
  handler: async (req, res) => {
    let sql
    if (req.params.id) {
      sql = `SELECT * FROM equity_texts_tocs_lv13 WHERE equity_txt_lv12_id = ${req.params.id}`;
    }

    try {
      const [rows, fields] = await executeSQL(sql)
      const data ={
        total_level13_results: rows.length,
        rows
      }
      res.json(data)
    } catch(err) {
      console.log(err)
    }
  }
}