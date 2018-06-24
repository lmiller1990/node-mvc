module.exports = (req, res, routes) => {
  const path = req.url.split("/").removeNulls()
  let controller = path.last() === "edit" ? path.thirdLast() : path.secondLast()
  let action = ""
  
  if (req.method === "GET") {
    if (path.length === 0) {
      controller = "application"
      action = "index"
    } else if (path.last() === controller) {
      action = "index"
    } else if (path.last() === "edit") {
      action = "edit"
    } else if (path.last() === "new") {
      action = path.last()
    } else {
      action = "show"
    }
  }

  if (req.method === "POST") {
    if (path.last() === controller) {
      action = "create"
    } else {
      action = path.last()
    }
  }

  if (req.method === "PUT") {
    action = "update"
  }

  const klass = controller.capitalize() + "Controller"

  try {
    const kontrollerInstance = new routes[klass]
    kontrollerInstance[action](req, res)
  } catch (err) {
    res.writeHead(404)
    res.end("404 - Page not found")
  }
}
