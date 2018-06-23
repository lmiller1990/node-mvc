const BaseEntity = require("../../models/base-entity.js")

class Entity extends BaseEntity {}

describe("Entity", () => {
  describe("Entity#init", () => {
    it("instantiates a new instance", () => {
      const entity = Entity.init({ name: "Lachlan", gender: "M" })

      expect(entity instanceof Entity).toBe(true)
      expect(entity.name).toBe("Lachlan")
      expect(entity.gender).toBe("M")
    })
  })
})
