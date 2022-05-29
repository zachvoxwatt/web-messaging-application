exports.postText = async (req, res, next) =>
{
    let logger = require('./utils/EventLogger')
    let getConnectedIPv4 = require('./utils/RequestIPGetter')
    let mysqlConnector = require('./utils/Database')
    let mysqlQueries = require('./utils/DBQuery')
    
    let { userID, contents } = req.body
    await mysqlConnector.query(mysqlQueries.POST_MESSAGE, [userID, contents])
    
    res.send('Your message has been sent!')
}