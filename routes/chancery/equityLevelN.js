const { executeSQL } = require('../../controllers/chancery')

export const equityLevelN = {
  path: '/texts/equity/level/:level/:id',
  method: 'get',
  handler: async (req, res) => {
    let sql
    // console.log(`(equityLevel2) Line 8: ${req.params.id}`)
    if (req.params.id) {
      let parent = parseInt(req.params.level) - 1
      sql = `SELECT * FROM equity_texts_tocs_lv${req.params.level} WHERE equity_txt_lv${parent}_id = ${req.params.id}`;
    }

    try {
      let label = `total_level${req.params.level}_results`
      const [rows, fields] = await executeSQL(sql)
      const data ={
        [label]: rows.length,
        rows
      }
      res.json(data)
    } catch(err) {
      console.log(err)
    }
  }
}