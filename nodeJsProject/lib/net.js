const net = require('net');

const server = net.createServer(socket => {
  socket.on('data', data => {
    socket.write('hello');
  });
  socket.on('end', () => {
    console.log('socket ends');
  });
  socket.write('test my code');
});

server.listen(8124, () => {
  console.log('server bound');
});