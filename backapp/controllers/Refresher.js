const mysql = require('../configs/database')
const dbquery = require('../utils/dbQueries')
const jwt = require('jsonwebtoken')

exports.refresher = async (req, res, next) =>
{
    let cookie = req.cookies
    if ( !cookie?.jwt ) return res.sendStatus(401)

    let refreshToken = cookie.jwt

    let results = await mysql.query(dbquery.GET_USER_VIA_RTOKEN, [refreshToken])
    if (results[0].length === 0) return res.sendStatus(403)

    let foundUser = results[0][0]

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, decoded) => { 
        if (err || foundUser.userID !== decoded.userID) return res.sendStatus(403)
        let accessToken = jwt.sign(
            {"userID": decoded.userID},
            process.env.ACCESS_TOKEN,
            { expiresIn: '1800s'}
        )

        res.send({ accessToken })
    })
}
