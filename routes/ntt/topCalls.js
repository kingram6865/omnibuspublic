const { executeSQL } = require('../../controllers/ntt')

export const topCalls = {
  path: '/ntt/topcalls',
  method: 'get',
  handler: async (req, res) => {
    const sql = `SELECT *, (SELECT count(*) FROM ntt_recording_regions WHERE recording_id = a.objid) as children FROM ntt_recordings a WHERE a.top_call = 1`
  
    try {
      const [rows, fields] = await executeSQL(sql)
      res.json(rows)
    } catch(err) {
      console.log(err)
    }
  }
}