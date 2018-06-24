const exec = require("child_process").exec
const insertInto = require("../../scripts/insert-into-table.js")
const {
  createIfDoesntExist,
  dropIfExists
} = require("./sql-utils.js")

const table = "test_table"

describe("insertInto", () => {
  afterAll(() => dropIfExists(table))

  context("the table exists", () => {
    it("inserts a new row with values", async (done) => {
      await dropIfExists(table)
      await createIfDoesntExist(table)

      const result = await insertInto(table, { name: "test_name" })
      // new table so first record will always be id = 1
      expect(result).toEqual({ id: 1 })

      exec(`psql -d test_db -c "SELECT name FROM ${table};"`,
        (err, stdout, stderr) => {
          if (err) console.log(err)
          if (stderr) console.log(stderr)

          const result = stdout.split("\n").removeNulls()
          expect(result[0].trim()).toBe("name")
          expect(result[2].trim()).toBe("test_name")
          expect(result[3].trim()).toBe("(1 row)")
          done()
        })
    })
  })
})
