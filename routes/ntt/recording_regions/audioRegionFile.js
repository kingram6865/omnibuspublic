const { executeSQL } = require('../../../controllers/ntt')

export const audioRegionFile = {
  path: '/ntt/recording/region/:id/audiofile',
  method: 'get',
  handler: async (req, res) => {
    const sql = `SELECT * FROM ntt_recording_regions WHERE objid = ${req.params.id}`
  
    try {
      const [rows, fields] = await executeSQL(sql)
      res.json(rows)
    } catch(err) {
      console.log(err)
    }
  }
}