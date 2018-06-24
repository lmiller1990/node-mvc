const exec = require("child_process").exec
const {
  createIfDoesntExist,
  dropIfExists,
  deleteAllMigrations
} = require("./sql-utils.js")

const testTable = "test_table"

let i = 0
describe("model migrations", () => {
  beforeEach(async () => {
    await dropIfExists(testTable)
    await deleteAllMigrations()
  })
  afterAll(async () => {
    await dropIfExists(testTable)
    await deleteAllMigrations()
  })

  describe("model:create", () => {
    it("creates the table and runs the migration", (done) => {
      exec(`yarn create:model ${testTable}`, (_err, _stdout, _stderr) => {
        exec(`yarn db:migrate`, (err, stdout, stderr) => {
          if (err) console.log(err)
          if (stderr) {}

          expect(stdout.lastLine().includes("Executed migration")).toBe(true)
          done()
        })
      })
    })
  })

  describe("model:destroy", () => {
    beforeEach(() => createIfDoesntExist(testTable))

    it("drops the table", (done) => {
      exec(`yarn destroy:model ${testTable}`, (_err, _stdout, _stderr) => {
        exec(`yarn db:migrate`, (err, stdout, stderr) => {
          if (err) console.log(err)
          if (stderr) {}

          expect(stdout.lastLine().includes("Executed migration")).toBe(true)
          done()
        })
      })
    })
  })
})
