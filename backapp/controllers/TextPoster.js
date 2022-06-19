const { v4 } = require('uuid')
const mysql = require('../configs/database')
const dbquery = require('../utils/dbQueries')
const serverUtil = require('../server')

exports.sender = async (req, res, next) =>
{
    let { userID, contents } = req.body
    
    if (!userID || !contents || contents.length === 0 || userID.length === 0) return res.sendStatus(400)
    let contentID = v4()
    await mysql.query(dbquery.POST_MESSAGE, [contentID, userID, contents])

    serverUtil.sendToAll({contentID, userID, contents})
    res.sendStatus(200)
}