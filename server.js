const express = require('express');
const moment = require('moment');
const http = require('http');
const socketIO = require('socket.io');
const app = express();

var PORT = 3000;
var server = http.createServer(app);
var io = socketIO(server);


app.get('/', (req, res) => {
  console.log(moment().format('MMM DD, YYYY k:mm:ss ::'), req.method, ' ', req.url);
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/test', (req, res) => {
  console.log(moment().format('MMM DD, YYYY k:mm:ss ::'), req.method, ' ', req.url);
  // io.on('connection', function() {
  //   console.log('Client connected..');
  // });
  res.sendFile(__dirname + '/views/test.html');
});

app.get('/test-test', (req, res) => {
    console.log(moment().format('MMM DD, YYYY k:mm:ss ::'), req.method, ' ', req.url);
    res.sendFile(__dirname + '/views/test-test.html');
});


server.listen(PORT, () => {
  console.log(`Server up at port ${PORT} ;)`);
});
