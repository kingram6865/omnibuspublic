const { executeSQL } = require('../../../controllers/ntt')

export const recordingRegionsByYear = {
  path: '/ntt/recording/regions/year/:year',
  method: 'get',
  handler: async (req, res) => {
    const sql = `SELECT * FROM ntt_recording_regions WHERE recording_id IN (SELECT objid FROM ntt_recordings WHERE SUBSTR(date_format(show_recording_date, '%Y-%m-%d'),1,4) = ${req.params.year})`
  
    try {
      const [rows, fields] = await executeSQL(sql)
      const data ={
        total_records: rows.length,
        rows
      }

      res.json(data)
    } catch(err) {
      console.log(err)
    }
  }
}