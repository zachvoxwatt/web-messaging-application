const blacklistedOrigins = require('../configs/blacklistedOrigins')

const credentials = (req, res, next) =>
{
    const origin = req.headers.origin

    if (!blacklistedOrigins.includes(origin)) res.header('Access-Control-Allow-Credentials', true)
    next()
}

module.exports = credentials
