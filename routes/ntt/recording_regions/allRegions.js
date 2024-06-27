const { executeSQL } = require('../../../controllers/ntt')

export const allRegions = {
  path: '/ntt/recordings',
  method: 'get',
  handler: async (req, res) => {
    const sql = 'SELECT *,  (SELECT count(*) FROM ntt_recording_regions WHERE recording_id = a.objid) as children FROM ntt_recordings a';

    try {
      const [rows, fields] = await executeSQL(sql)
      res.json(rows)
    } catch(err) {
      console.log(err)
    }
  }
}