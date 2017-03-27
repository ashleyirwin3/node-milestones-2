'use strict';

const express = require('express');
const app = express();
// console.log(process.env.PORT)
const port = process.env.PORT || 3000

const requestTime = (req, res, next) => {
  req.requestedTime = Date.now();
  next()
}

app.use(express.static(__dirname + '/public'))

app.use(requestTime)

app.get('/hello', (req, res, next) => {
  console.log('Hey there world')
  console.log(`ran at ${req.requestedTime}`)
  res.sendFile(__dirname + '/public/hello.html')
})

app.listen(port, () => {
 console.log('this is the port you are looking for')
})
