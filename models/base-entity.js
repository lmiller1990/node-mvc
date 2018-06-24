const insertInto = require("../scripts/insert-into-table.js")

class BaseEntity {
  constructor(attrs) {
    this.assignAttrs(attrs)
  }

  assignAttrs(attrs) {
    for (let [key, val] of Object.entries(attrs)) {
      this[key] = val
    }
  }

  static init(attrs) {
    return new this(attrs)
  }

  static create(attrs) {
    return insertInto(this.name.toLowerCase(), attrs)
  }
}

module.exports = BaseEntity
