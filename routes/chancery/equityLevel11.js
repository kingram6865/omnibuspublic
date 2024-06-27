const { executeSQL } = require('../../controllers/chancery')

export const equityLevel11 = {
  path: '/chancery/texts/equity/level11/:id',
  method: 'get',
  handler: async (req, res) => {
    let sql
    if (req.params.id) {
      sql = `SELECT * FROM equity_texts_tocs_lv11 WHERE equity_txt_lv10_id = ${req.params.id}`;
    }

    try {
      const [rows, fields] = await executeSQL(sql)
      const data ={
        total_level11_results: rows.length,
        rows
      }
      res.json(data)
    } catch(err) {
      console.log(err)
    }
  }
}