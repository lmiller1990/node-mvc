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
    return new Promise(async (resolve, reject) => {
      try {
        const { id } = await insertInto(this.name.toLowerCase(), attrs)
        resolve(new this({...attrs, id }))
      } catch (e) {
        console.log("Error occurred: ", e)
        reject(e)
      }
    })
  }
}

module.exports = BaseEntity
