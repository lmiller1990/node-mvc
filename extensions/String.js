const _ = require("lodash")

String.prototype.capitalize = function() {
  return this[0].toUpperCase() + this.slice(1)
}

String.prototype.lastLine = function() {
  const arr = this.trim().split("\n")
  return arr[arr.length-1]
}

String.prototype.pascalCase = function() {
  return _.upperFirst(_.camelCase(this))
}

String.prototype.kebabCase = function() {
  return _.kebabCase(this)
}

String.prototype.trimAllLeft = function() {
  let str = ""
  for (let line of this.split("\n")) {
    str = str + line.trimLeft() + "\n"
  }
  return str.trimRight()
}
