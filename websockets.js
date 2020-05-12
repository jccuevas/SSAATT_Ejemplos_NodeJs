/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);




app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/websockets.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  for(let i=1;i<10;i++){
       io.emit('chat message', "SERVER:"+i); 
    }
  socket.on('disconnect', () => {
    console.log('user disconnected');
    
  });
  
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', "SERVER:"+msg);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});