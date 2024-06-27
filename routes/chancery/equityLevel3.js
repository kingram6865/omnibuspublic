const { executeSQL } = require('../../controllers/chancery')

export const equityLevel3 = {
  path: '/texts/equity/level3/:id',
  method: 'get',
  handler: async (req, res) => {
    let sql
    if (req.params.id) {
      sql = `SELECT * FROM equity_texts_tocs_lv3 WHERE equity_txt_lv2_id = ${req.params.id}`;
    }

    try {
      const [rows, fields] = await executeSQL(sql)
      const data ={
        total_level3_results: rows.length,
        rows
      }
      res.json(data)
    } catch(err) {
      console.log(err)
    }
  }
}