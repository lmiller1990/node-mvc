String.prototype.capitalize = function() {
  return this[0].toUpperCase() + this.slice(1)
}

Array.prototype.last = function() {
  return this[this.length-1]
}

Array.prototype.secondLast = function() {
  if (this.length > 1) 
    return this[this.length-2]
  else
    return this[this.length-1]
}

Array.prototype.removeNulls = function() {
  const arr = []
  for (let i = 0; i < this.length; i++) {
    if (!!this[i]) {
      arr.push(this[i])
    }
  }
  return arr
}

class UsersController {
  constructor() {
  }

  index(req, res) {
    res.writeHead(200)
    res.end("Hello! from users#index")
  }
}

const classes = { 
  UsersController
}

const http = require("http")

const requestListener = (req, res) => {
  if (req.url.includes("favicon")) {
    return res.end()
  }
  const route = req.url.split("/").removeNulls()
  const controller = route.secondLast()
  const action = route.last() === controller 
    ? "index" 
    : route.last()

  const kontroller = controller.capitalize() + "Controller"

  Object.create(classes[kontroller].prototype)[action](req, res)
}

const server = http.createServer(requestListener)

server.listen(8000)
