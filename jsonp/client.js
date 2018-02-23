const http = require("http")
const url = require("url")
const fs = require("fs")
const server = http.createServer((req, res) => {
  if (req.url !== "/favicon.ico") {
    const {pathname, query} = url.parse(req.url, true)
    if (pathname === "/") {
        let result = fs.readFileSync("./index.html","utf-8")
        res.setHeader("Content-Type","text/html")
        res.end(result)
      }
    }
})

server.listen({port: 8000})

module.exports = server