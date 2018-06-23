String.prototype.capitalize = function() {
  return this[0].toUpperCase() + this.slice(1)
}

String.prototype.lastLine = function() {
  const arr = this.trim().split("\n")
  return arr[arr.length-1]
}

