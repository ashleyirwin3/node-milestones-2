'use strict'

const express = require('express')
const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')

// const greetings = ["Hello", "Howdy"]
const menu = ["Carrot Cake-$1,000,000", "Orange Creme Pie-$1,000,000", "Grapefruit Brownies-$1,000,000"]
app.get('/', (req, res, next) => {
  res.render('index', {subtitle: "Welcome"})
})

app.get('/about', (req, res, next) => {
  res.render('about', {subtitle: "Welcome"})
})

// const menu = ["Carrot Cake", "Orange Creme Pie", "Grapefruit Brownies"]
app.get('/inventory', (req, res, next) => {
  res.render('inventory', {subtitle: "Welcome", menu})
})

const port = process.env.PORT || 3000
app.set('port', port)

app.listen(port, () =>
  console.log(`Listening on port ${port}`)
)
