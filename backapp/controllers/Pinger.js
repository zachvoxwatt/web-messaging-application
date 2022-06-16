exports.pinger = async (req, res, next) => { res.status(200).send({ isOnline: true }) }
