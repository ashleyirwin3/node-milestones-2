const http = require('http')
const { readFile } = require('fs')
const server = http.createServer()
server.on('request', (req, res) => {
   readFile('index.html', function (err, data) {
    res.writeHead(200, {'Content-Type': 'text/html', 'Content-Length': data.length})
    res.write(data)
    res.end()
      console.log('Request received for:', req.url)
      res.end('OK')
  })
})


server.listen(8080)
