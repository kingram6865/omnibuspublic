import  { executeSQL }  from '../../controllers/youtube'

export const videosByChannel = {
  path: '/youtube/channel/:id/videos',
  method: 'get',
  handler: async (req, res) => {
    const sql = `SELECT * FROM youtube_downloads WHERE channel_owner_id = ${req.params.id}`
    const sql2 = `SELECT * from youtube_channel_owners WHERE objid = ${req.params.id}`
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
        data.next = `${req.protocol}://${req.get('Host')}${req.baseUrl}${req.path}?page=${page + 1}&limit=${limit}`
      }
  
      if (startIndex > 0) {
        data.previous = `${req.protocol}://${req.get('Host')}${req.baseUrl}${req.path}?page=${page - 1}&limit=${limit}`
      }

      res.json(data)
    } catch(err) {
      console.log(err)
    }
  }
}