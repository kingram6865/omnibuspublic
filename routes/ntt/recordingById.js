const { executeSQL } = require('../../controllers/ntt')

export const recordingById = {
  path: '/ntt/recordings/:id',
  method: 'get',
  handler: async (req, res) => {
    const sql = `SELECT *, (SELECT count(*) FROM ntt_recording_regions WHERE recording_id = ${req.params.id}) as children FROM ntt_recordings WHERE objid = ${req.params.id}`
  
    try {
      const [rows, fields] = await executeSQL(sql)
      res.json(rows)
    } catch(err) {
      console.log(err)
    }
  }
}