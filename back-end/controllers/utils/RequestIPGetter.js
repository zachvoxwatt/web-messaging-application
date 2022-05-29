const getConnectedIPv4 = (req) =>
{
    let ip = req.connection.remoteAddress || req.headers['x-forwarded-for']
    return ip.replace(/[:f]+/, '')
}

module.exports = getConnectedIPv4