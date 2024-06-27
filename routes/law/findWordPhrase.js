const { executeSQL } = require('../../controllers/law')

export const findWordPhrase = {
  path: "/law/termsphrases/search/:word",
  method: "get",
  handler: async (req, res) => {
    const sql = `SELECT * FROM terms_phrases_details WHERE term_phrase LIKE '%${req.params.word}%'`
    try {
      const [rows, fields] = await executeSQL(sql)
      res.json(rows)
    } catch(err) {
      throw err;
    }

  }
}
