const { executeSQL } = require('../../controllers/chancery')

export const equityLevel9 = {
  path: '/chancery/texts/equity/level9/:id',
  method: 'get',
  handler: async (req, res) => {
    let sql
    if (req.params.id) {
      sql = `SELECT * FROM equity_texts_tocs_lv9 WHERE equity_txt_lv8_id = ${req.params.id}`;
    }

    try {
      const [rows, fields] = await executeSQL(sql)
      const data ={
        total_level9_results: rows.length,
        rows
      }
      res.json(data)
    } catch(err) {
      console.log(err)
    }
  }
}