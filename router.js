const routes = require("./routes.js")

module.exports = (req, res) => {
  if (req.url.includes("favicon")) {
    return res.end()
  }
  const route = req.url.split("/").removeNulls()
  const controller = route.secondLast()
  const action = route.last() === controller 
    ? "index" 
    : route.last()

  const kontroller = controller.capitalize() + "Controller"

  Object.create(routes[kontroller].prototype)[action](req, res)
}

