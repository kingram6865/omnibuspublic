const { executeSQL } = require('../../controllers/ntt')

export const recordingByEpisode = {
  path: '/ntt/recordings/episode/:episode',
  method: 'get',
  handler: async (req, res) => {
    const sql = `SELECT * FROM ntt_recordings WHERE episode = ${req.params.episode}`
  
    try {
      const [rows, fields] = await executeSQL(sql)
      res.json(rows)
    } catch(err) {
      console.log(err)
    }
  }
}