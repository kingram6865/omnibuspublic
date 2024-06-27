import  { executeSQL }  from '../../controllers/youtube'

export const channelsByMostVideos = {
  // path: '/youtube/channel/videos?min=:min&max=:max',
  // path: '/youtube/channel/videos/:max',
  path: '/youtube/channel/videos',
  method: 'get',
  handler: async (req, res) => {
    const max = (req.query.max) ? parseInt(req.query.max) : 50
    const min = (req.query.min) ? parseInt(req.query.min) : 5
    const sql = `select * from youtube_channel_owners WHERE objid IN (SELECT channel_owner_id FROM youtube_downloads GROUP BY channel_owner_id having count(*) >= ${max}) ORDER BY owner_name`
    console.log(sql)
    const page = (req.query.page) ? parseInt(req.query.page) : 1
    const limit = (req.query.limit) ? (parseInt(req.query.limit) > 25) ? 25 : parseInt(req.query.limit) : 25
    const startIndex = (page - 1) * limit
    const endIndex = page * limit    

    try {
      const [rows, fields] = await executeSQL(sql)
      const data = {
        total_records: rows.length,
        previous: "",
        next: "",
        "results": rows.slice(startIndex, endIndex),
      }

      if (endIndex < rows.length) {
        data.next = `${req.protocol}://${req.get('Host')}${req.baseUrl}${req.path}?max=${max}&page=${page + 1}&limit=${limit}`
      }
  
      if (startIndex > 0) {
        data.previous = `${req.protocol}://${req.get('Host')}${req.baseUrl}${req.path}?max=${max}&page=${page - 1}&limit=${limit}`
      }

      res.json(data)
    } catch(err) {
      console.log(err)
    }
  }
}