const blacklistedOrigins = require('./blacklistedOrigins')

const corsOptions = {
    origin: (origin, callback) => 
    {
        if (blacklistedOrigins.indexOf(origin) !== -1 || !origin) callback(new Error('Not allowed by CORS'))
        else callback(null, true)
    },
    optionsSuccessStatus: 200
}

module.exports = corsOptions