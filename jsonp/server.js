const http = require("http")
const url = require("url")
const server = http.createServer((req, res) => {
  const {query} = url.parse(req.url, true)
  const callback = query.callback
  res.end(`${callback}({ret: true, data: []})`)
})

server.listen({port: 9000})

module.exports = server