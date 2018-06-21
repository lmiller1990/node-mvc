const http = require("http")
const router = require("./router.js")

require("./extensions/String.js")
require("./extensions/Array.js")

const server = http.createServer(router)

server.listen(8000)
