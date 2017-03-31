'use strict'

const express = require('express')
const app = express()

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('index', (req, res, next) => {
  res.render(index)
})

const port = process.env.PORT || 3000
app.set('port', port)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
