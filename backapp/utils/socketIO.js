const socketIO = require('socket.io')

exports.prepareServer = server => { return socketIO(server, {cors: {origin: '*'}}) }

exports.connection = io => 
{
    io.on('connection', socket =>
        {
            console.log(`Client at socket ${socket.id} has connected`)

            socket.on('message', data => { console.log(`Client at socket ${socket.id} pushed a datagram: ${data}`) })
            socket.on('disconnect', () => { console.log(`Client at socket ${socket.id} has disconnected`) })
        }
    )
}
