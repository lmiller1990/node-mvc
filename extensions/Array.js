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

