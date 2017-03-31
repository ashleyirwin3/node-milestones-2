'use strict'

const express = require('express')
const app = express()

const routes = require('../routes/')

const requestTime = (req, res, next) => {
  req.requestedTime = Date.now()
  next()
}

app.use(requestTime)
app.use(routes)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
