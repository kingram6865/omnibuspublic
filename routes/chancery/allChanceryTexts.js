const { executeSQL } = require('../../controllers/chancery')

export const allChanceryTexts = {
  path: '/texts/equity',
  method: 'get',
  handler: async (req, res) => {
    const sql = "SELECT * FROM equity_texts WHERE (book_title IS NOT NULL || book_title = '') ORDER BY book_title";
    try {
      const [rows, fields] = await executeSQL(sql)
      const data ={
        total_texts: rows.length,
        rows
      }
      res.json(data)
    } catch(err) {
      console.log(err)
    }
  }
}