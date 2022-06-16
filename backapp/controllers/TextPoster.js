const mysql = require('../configs/database')
const dbquery = require('../utils/db_queries')

exports.sender = async (req, res, next) =>
{
    let { userID, contents } = req.body
    
    if (contents.length === 0 || userID.length === 0) return res.sendStatus(204)

    await mysql.query(dbquery.POST_MESSAGE, [userID, contents])
    res.sendStatus(200)
}