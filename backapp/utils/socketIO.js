const socketIO = require('socket.io')

exports.prepareServer = server => { return socketIO(server, {cors: {origin: true}}) }
exports.connection = io => 
{
    io.on('connection', socket =>
        {
            console.log(`Client at socket ${socket.id} has connected`)
            socket.on('disconnect', () => { console.log(`Client at socket ${socket.id} has disconnected`) })
            socket.on('leaveapp', () => { socket.disconnect() })
        }
    )
}

exports.sendToAll = (ioServer, data) => { ioServer.emit('message', data) }
