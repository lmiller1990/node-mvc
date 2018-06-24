describe("Array.prototype.joinExcepLast", () => {
  context("arrays contains two elements", () => {
    it("adds a comma to all items except last", () => {
      const actual = ["val1", "val2"].joinExceptLast(", ")

      expect(actual).toBe("val1, val2")
    })
  })
})
