const { executeSQL } = require('../../controllers/chancery')

export const allDigitizedEquityTexts = {
  path: '/texts/equity/available',
  method: 'get',
  handler: async (req, res) => {
    const sql = "SELECT * FROM equity_texts WHERE status = 1 ORDER BY book_title";
    try {
      const [rows, fields] = await executeSQL(sql)
      const data ={
        total_available_texts: rows.length,
        rows
      }
      res.json(data)
    } catch(err) {
      console.log(err)
    }
  }
}