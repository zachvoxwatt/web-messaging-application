const { v4 } = require('uuid')
const dbquery = require('../utils/db_queries')
const jwt = require('jsonwebtoken')
const mysql = require('../configs/database')

exports.joiner = async (req, res, next) =>
{
    let { displayName } = req.body
    if ( !displayName ) { res.status(400).send({message: 'Invalid Inputs.'}); return }

    // Check for existing display names in the db
    let results = await mysql.query(dbquery.CHECK_EXISTING_ONLINE_USERNAME, [displayName])
    if (results[0].length !== 0)
    {
        if (results[0][0].online === 1) console.log('HEY YOU ARE NOT ALLOWED HERE >:(') //handle given name
        return res.sendStatus(409)
    }
    

    try
    {
        let userID = v4()

        let accessToken = jwt.sign(
            { "userID": userID },
            process.env.ACCESS_TOKEN,
            { expiresIn: '1800s' }
        )
        let refreshToken = jwt.sign(
            { "userID": userID },
            process.env.REFRESH_TOKEN,
            { expiresIn: '1d' }
        )
        
        await mysql.query(dbquery.ADD_ACTIVE_USER_TO_DB, [userID, displayName, refreshToken])
        res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
        res.send({ accessToken })
    } 
    catch (err) { res.status(500).send({message: err.message}) }
}
