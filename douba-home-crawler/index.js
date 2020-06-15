const express = require('express');
const app = express();
const getDatas = require('./crawlerData');

// ...

let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log('Your App is running at http://%s:%s', host, port);
});

app.get('/', function (req, res) {
  const {pagenum = 0, count = 20} = req.query;
  getDatas({pagenum, count}).then((hotNews)=> {
    res.send(hotNews);
  }).catch(err=> {
    res.send(err);
  })
});