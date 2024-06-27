// const { executeSQL } = require('../../controllers/chancery')
import { executeSQL } from '../../controllers/chancery';

async function getTextLvlN(id, level){
  let sql
  level = parseInt(level)

  if (parseInt(level) === 1 ){
    sql=`SELECT * FROM equity_texts_tocs_lv${level} WHERE equity_txt_id = ${id}`
  } else {
    sql=`SELECT * FROM equity_texts_tocs_lv${level} WHERE equity_txt_lv${parseInt(level)-1}_id = ${id}`
  }

  try {
    const [rows, fields] = await executeSQL(sql)
    return rows
  } catch(err) {
    console.log(err)
  }
}

async function getText(id) {
  const SQL = `SELECT * FROM equity_texts WHERE objid = ${id}`
  try {
    const [rows, fields] = await executeSQL(SQL)
    return rows[0]
  } catch(err) {
    console.log(err)
  }
}

async function buildOutput(id, level) {
  let children
  let tree = {}
  
  level = parseInt(level)
  if (level === 0) {
    let result = await getText(id)
    tree['book'] = JSON.parse(JSON.stringify(result))
    children = await buildOutput(result.objid, 1)
    tree['book']['children'] = children
  } else {
    children = []
    let results = await getTextLvlN(id, level)

    if (results.length > 0) {
      for (let i = 0; i < results.length; i++ ) {
        if (results[i]['section_type'] === 'node') {
          let subchildren = await buildOutput(results[i]['objid'], level+1)
          results[i]['children'] = subchildren
        } else {
          children.push(results[i])
        }
      }
    }

    return JSON.parse(JSON.stringify(results))
  }

  return tree
}

export const fullText = {
  path: '/texts/equity/full/:id',
  method: 'get',
  handler: async (req, res) => {
    
    try {
      const book = await buildOutput(req.params.id, 0)
      res.json(book)
    } catch(err) {
      throw err;
    }
  }
}
