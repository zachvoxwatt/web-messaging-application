const mysql = require('../configs/database')
const dbquery = require('../utils/dbQueries')
const cookieSettings = require('../configs/cookie_settings')

exports.leaver = async (req, res, next) =>
{   
    let cookie = req.cookies
    if ( !cookie?.jwt ) return res.sendStatus(204) // no content to send back

    let refreshToken = cookie.jwt

    // is the refreshToken in db?
    let results = await mysql.query(dbquery.GET_USER_VIA_RTOKEN, [refreshToken])
    if (results[0].length === 0) 
    {
        res.clearCookie('jwt', cookieSettings.leaveCookieSettings)
        return res.sendStatus(204)
    }

    let foundUser = results[0][0]

    // Delete refreshToken in db
    await mysql.query(dbquery.DELETE_RTOKEN_AND_SET_OFFLINE, [foundUser.refreshToken])

    res.clearCookie('jwt', cookieSettings.leaveCookieSettings)
    res.sendStatus(204)
}
