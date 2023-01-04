// const http = require('http');


// http.createServer(function (req, res) {
//     res.end('Hello World  Http')
// }).listen(3000, "127.0.0.1")

 
// console.log('Server running at http://127.0.0.1:3000/');

// On a le droit d avoir qu un seule port
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


app.get('/contact', (req, res) => {
    res.send('Page Contact !')
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });