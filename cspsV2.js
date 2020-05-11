'use strict';

// 1st party modules
const net = require('net');
const server = net.createServer();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

// 3rd party modules
const uuid = require('uuid').v4;


let socketPool = {};

server.on('connection', (socket) => {
  console.log('client connected');
  const id = `Socket-${uuid()}`;
  socketPool[id] = socket;

  socket.on('data', function(data){
    console.log('incoming', data.toString());
    dispatchEvent(data);
  });

});


function dispatchEvent(buffer){
  let message = JSON.parse(buffer.toString().trim());
  broadcast(message);
}

function broadcast(message){
  let payload = JSON.stringify(message);
  for(let socket in socketPool){
    socketPool[socket].write(payload);
  }
}


server.listen(PORT, () => {
  console.log(`server up: ${PORT}`);
});
