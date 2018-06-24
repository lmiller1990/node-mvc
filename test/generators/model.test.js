const { buildModelTemplate } = require("../../templates/generators.js")

describe("buildModelTemplate", () => {
  it("builds a model with a multiword name", () => {
    const template = buildModelTemplate("animal-keeper")

    expect(template).toBe(
      `const BaseEntity = require("./base-entity.js")

      class AnimalKeeper extends BaseEntity {

      }`.trimAllLeft()
    )
  })
})
