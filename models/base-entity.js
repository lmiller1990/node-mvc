class BaseEntity {
  constructor(attrs) {
    for (let [key, val] of Object.entries(attrs)) {
      this[key] = val
    }
  }

  static init(attrs) {
    return new this(attrs)
  }

  static create() {
  }
}

module.exports = BaseEntity
