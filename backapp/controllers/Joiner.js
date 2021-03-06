const { v4 } = require('uuid')
const dbquery = require('../utils/dbQueries')
const jwt = require('jsonwebtoken')
const mysql = require('../configs/database')
const cookieSettings = require('../configs/cookie_settings')

exports.joiner = async (req, res, next) =>
{
    let { displayName } = req.body
    if ( !displayName ) { res.status(400).send({message: 'Invalid Inputs.'}); return }

    // Check for existing display names in the db
    let alterInfo = false, existedID, existedName, onlineStatus;
    let results = await mysql.query(dbquery.CHECK_EXISTING_ONLINE_USERNAME, [displayName])
    
    if (results[0].length !== 0)
    {
        // get the JSON data
        let resultsJSON = results[0][0]

        if (resultsJSON.isOnline === 1) return res.sendStatus(409) //handle given name
        else if (resultsJSON.isOnline === 0) {
            alterInfo = true
            existedID = resultsJSON.userID
            existedName = resultsJSON.displayName
            onlineStatus = resultsJSON.isOnline
        }
    }

    try
    {
        let userID, refreshToken, accessToken
        if (!alterInfo) 
        {
            userID = v4()

            accessToken = jwt.sign(
                { "userID": userID },
                process.env.ACCESS_TOKEN,
                { expiresIn: '1800s' }
            )
            refreshToken = jwt.sign(
                { "userID": userID },
                process.env.REFRESH_TOKEN,
                { expiresIn: '1d' }
            )
        }

        else 
        {
            accessToken = jwt.sign(
                { "userID": existedID },
                process.env.ACCESS_TOKEN,
                { expiresIn: '1800s' }
            )
            refreshToken = jwt.sign(
                { "userID": existedID },
                process.env.REFRESH_TOKEN,
                { expiresIn: '1d' }
            )
        }
        
        if (!alterInfo) await mysql.query(dbquery.ADD_ACTIVE_USER_TO_DB, [userID, displayName, refreshToken])
        else await mysql.query(dbquery.CHANGE_EXISTING_USER_TOKEN, [refreshToken, existedID, existedName])

        res.cookie('jwt', refreshToken, cookieSettings.joinCookieSettings)
        
        if (alterInfo) userID = existedID
        res.send({ userID, accessToken })
    } 
    catch (err) { res.status(500).send({message: err.message}) }
}
