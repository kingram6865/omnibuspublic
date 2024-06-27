const { executeSQL } = require('../../../controllers/ntt')

export const recordingRegionsById = {
  path: '/ntt/regions/recording/:id',
  method: 'get',
  handler: async (req, res) => {
    const sql = `SELECT * FROM ntt_recording_regions WHERE recording_id = ${req.params.id}`
  
    try {
      const [rows, fields] = await executeSQL(sql)
      res.json(rows)
    } catch(err) {
      console.log(err)
    }
  }
}