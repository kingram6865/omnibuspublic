const { executeSQL } = require('../../controllers/ntt')

export const recordingsByYear = {
  path: '/ntt/recordings/year/:year',
  method: 'get',
  handler: async (req, res) => {
    const sql = `SELECT * FROM ntt_recordings WHERE SUBSTR(date_format(show_recording_date, '%Y-%m-%d'),1,4) = ${req.params.year}`

    try {
      const [rows, fields] = await executeSQL(sql)

      for (let i=0; i < rows.length; i++) {
        // let sql2 = `SELECT count(*) as children FROM ntt_recording_regions WHERE recording_id = ${rows[i].objid}`
        let sql2 = `SELECT * FROM ntt_recording_regions WHERE recording_id = ${rows[i].objid}`
        const [rows2, fields2] = await executeSQL(sql2)
        rows[i]['children'] = rows2
      }

      res.json(rows)
    } catch(err) {
      console.log(err)
    }
  }
}