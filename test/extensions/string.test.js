describe("String.prototype.lastLine", () => {
  context("is a single line string", () => {
    it("returns the first and only line", () => {
      const str = "First"

      expect(str.lastLine()).toBe("First")
    })
  })

  context("is a multiline string", () => {
    it("returns the last line", () => {
      const str = "First\nsecond"

      expect(str.lastLine()).toBe("second")
    })
  })

  context("string ends with a newline", () => {
    it("returns last non-newline string", () => {
      const str = "First\n"

      expect(str.lastLine()).toBe("First")
    })
  })
})
