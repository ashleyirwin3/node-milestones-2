'use strict'

const express = require('express')
const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')

const greetings = ["Hello", "Howdy"]
app.get('/', (req, res, next) => {
  res.render('index', {subtitle: "Welcome", greetings})
})

app.get('/about', (req, res, next) => {
  res.render('about', {subtitle: "Welcome", greetings})
})


const port = process.env.PORT || 3000
app.set('port', port)

app.listen(port, () =>
  console.log(`Listening on port ${port}`)
)
