'use strict'

const express = require('express')
const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')


const menu = ["Carrot Cake: $2.00", "Cupcakes: $3.00", "Cookies: $1.50", "Ice Cream: $3.50", "Taffy: $1.00"]
app.get('/', (req, res, next) => {
  res.render('index', {subtitle: "Welcome"})
})

app.get('/about', (req, res, next) => {
  res.render('about', {subtitle: "Welcome"})
})


app.get('/inventory', (req, res, next) => {
  res.render('inventory', {subtitle: "Welcome", menu})
})

app.get('/nav', (req, res, next) => {
  res.render('nav', {subtitle: "Welcome", menu})
})

const port = process.env.PORT || 3000
app.set('port', port)

app.listen(port, () =>
  console.log(`Listening on port ${port}`)
)
