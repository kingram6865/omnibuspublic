const { executeSQL } = require('../../controllers/chancery')

export const equityTOCById = {
  path: '/texts/equity/toc/id/:id',
  method: 'get',
  handler: async (req, res) => {
    let sql
    if (req.params.id) {
      sql = `SELECT * FROM equity_texts_tocs_lv1 WHERE equity_txt_id = ${req.params.id}`;
    }

    try {
      const [rows, fields] = await executeSQL(sql)
      const data ={
        toc_items: rows.length,
        rows
      }
      res.json(data)
    } catch(err) {
      console.log(err)
    }
  }
}