const { executeSQL } = require('../../../controllers/ntt')

export const recordingRegions = {
  path: '/ntt/regions',
  method: 'get',
  handler: async (req, res) => {
    const sql = `SELECT * FROM ntt_recording_regions`
  
    try {
      const [rows, fields] = await executeSQL(sql)
      res.json(rows)
    } catch(err) {
      console.log(err)
    }
  }
}