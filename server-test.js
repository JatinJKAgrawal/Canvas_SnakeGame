const express = require('express');
const moment = require('moment');
const http = require('http');
const socketIO = require('socket.io');
const app = express();

var PORT = 4200;//port
var server = http.createServer(app);
var io = socketIO(server);

// var interval = [];//TEsting check if push unshift(queuing) stratedy works


app.get('/', (req, res) => {
  console.log(moment().format('MMM DD, YYYY k:mm:ss ::'), req.method, ' ', req.url);
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/test', (req, res) => {
  console.log(moment().format('MMM DD, YYYY k:mm:ss ::'), req.method, ' ', req.url);
  res.sendFile(__dirname + '/views/test.html');
});

app.get('/test-test', (req, res) => {
  //clearInterval(myInterval);
  console.log(moment().format('MMM DD, YYYY k:mm:ss ::'), req.method, ' ', req.url);
  res.sendFile(__dirname + '/views/test-test.html');

});



io.on('connection', function(socket) {
  var gameInterval;
  console.log('New user connected!');
  socket.on('gameStartEvent',(data) => {
    console.log('From User || ', data);
    gameInterval = setInterval(() => {
      socket.emit('update','update fired');
    }, 20);
  });

  socket.on('stopGameEvent', (data) => {
    clearInterval(gameInterval);
    console.log('From user ||', data);
  });


  socket.on('disconnect', () => {
    console.log('User Disconnected!');
    if(!gameInterval) clearInterval(gameInterval);
  });
});


server.listen(PORT, () => {
  console.log(`Server up at port ${PORT} ;)`);
});
