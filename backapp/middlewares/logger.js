const { format } = require('date-fns')
const fs = require('fs')
const fsPromise = require('fs').promises
const path = require('path')

if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) fs.mkdir(path.join(__dirname, '..', 'logs'), (err) => { console.log(err) })
if (!fs.existsSync(path.join(__dirname, '..', 'logs', 'server.log'))) fs.writeFileSync(path.join(__dirname, '..', 'logs', 'server.log'), '')

const logEvent = async (messageToLog) =>
{
    let timestamp = `${format(new Date(), '[dd/MM/yyyy - HH:mm:ss]')}`
    let logContent = `${timestamp}: ${messageToLog}\n`
    
    try { await fsPromise.appendFile(path.join(__dirname, '..', 'logs', 'server.log'), logContent) } 
    catch (err) { console.log(err) }
}

const logger = (req, res, next) =>
{
    logEvent(`URL: ${req.url}, Method: ${req.method}, Origin: ${req.headers.origin}`)
    next()
}

module.exports = { logEvent, logger }