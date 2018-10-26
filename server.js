const express = require('express');
const moment = require('moment');
const app = express();


app.get('/', (req, res) => {
  console.log(moment().format('MMM DD, YYYY k:mm:ss ::'), req.method, ' ', req.url);
  res.sendFile(__dirname + '/views/index.html');
});


app.listen(3000, () => {
  console.log('Server up at port 3000 ;)');
});
