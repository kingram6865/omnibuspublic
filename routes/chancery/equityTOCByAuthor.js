const { executeSQL } = require('../../controllers/chancery')

export const equityTOCByAuthor = {
  path: '/texts/equity/toc/author/:author',
  method: 'get',
  handler: async (req, res) => {
    const sql = `SELECT * FROM equity_texts_tocs_lv1 WHERE equity_txt_id IN (SELECT objid FROM equity_texts WHERE author LIKE '%${req.params.author}%')`;

    try {
      const [rows, fields] = await executeSQL(sql)
      const data ={
        total_texts_by_author: rows.length,
        rows
      }
      res.json(data)
    } catch(err) {
      console.log(err)
    }
  }
}