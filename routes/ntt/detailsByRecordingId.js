const { executeSQL } = require('../../controllers/ntt')

export const detailsByRecordingId = {
  path: '/ntt/regions/recording/:recordingId',
  method: 'get',
  handler: async (req, res) => {
    const sql = `select * from ntt_recording_regions where recording_id = ${req.params.recordingId}`
  
    try {
      const [rows, fields] = await executeSQL(sql)
      res.json(rows)
    } catch(err) {
      console.log(err)
    }
  }
}