const jwt = require('jsonwebtoken')

const verityToken = (req, res, next) =>
{
    const authHeader = req.headers['authorization']

    if (!authHeader) return res.sendStatus(401)
    const token = authHeader.split(' ')[1]

    jwt.verify(
        token, process.env.ACCESS_TOKEN, (err, decoded) => 
        {
            if (err) return res.sendStatus(403) //invalid
            req.userID = decoded.userID
            
            next()
        })
}

module.exports = verityToken