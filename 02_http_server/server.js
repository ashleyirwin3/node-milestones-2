const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
  console.log('Request received for:', req.url)
  res.end('OK')
})
server.listen(8080)
