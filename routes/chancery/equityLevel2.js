const { executeSQL } = require('../../controllers/chancery')

export const equityLevel2 = {
  path: '/texts/equity/level2/:id',
  method: 'get',
  handler: async (req, res) => {
    let sql
    // console.log(`(equityLevel2) Line 8: ${req.params.id}`)
    if (req.params.id) {
      sql = `SELECT * FROM equity_texts_tocs_lv2 WHERE equity_txt_lv1_id = ${req.params.id}`;
    }

    try {
      const [rows, fields] = await executeSQL(sql)
      const data ={
        total_level2_results: rows.length,
        rows
      }
      res.json(data)
    } catch(err) {
      console.log(err)
    }
  }
}