const { executeSQL } = require('../../controllers/ntt')

export const detailsByEpisode = {
  path: '/ntt/regions/episode/:episode',
  method: 'get',
  handler: async (req, res) => {
    const sql = `select * from ntt_recording_regions where recording_id IN (SELECT objid from ntt_recordings where episode = ${req.params.episode})`
  
    try {
      const [rows, fields] = await executeSQL(sql)
      res.json(rows)
    } catch(err) {
      console.log(err)
    }
  }
}