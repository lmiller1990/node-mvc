const BaseEntity = require("../../models/base-entity.js")
const insertInto = require("../../scripts/insert-into-table.js")
jest.mock("../../scripts/insert-into-table.js", () => jest.fn())
const id = 1
insertInto.mockReturnValue({ id })

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

  describe("Entity#create", () => {
    it("instantiates new instance and inserts values into the relevant table", async () => {
      const attrs = { name: "Lily", gender: "F" }

      const entity = await Entity.create(attrs)

      expect(insertInto).toHaveBeenCalledWith("entity", attrs)
      expect(entity instanceof Entity).toBe(true)
      expect(entity.id).toBe(id)
    })
  })
})
