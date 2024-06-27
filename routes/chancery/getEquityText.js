import { executeSQL } from "../../controllers/chancery"

export const getEquityText = {
  path: `/texts/equity/book/:id`,
  method: 'get',
  handler: async (req, res) => {
    const sql = `SELECT * FROM equity_texts WHERE objid = ${req.params.id}`;
    try {
      const [rows, fields] = await executeSQL(sql)
      res.json(rows)
    } catch(err) {
      console.log(err)
    }
  }
}