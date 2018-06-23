const exec = require("child_process").exec
const {
  createIfDoesntExist,
  dropIfExists
} = require("./sql-utils.js")

const testTable = "test_table"

describe("model:create", () => {
  context("the table does not exist", () => {
    beforeAll((done) => dropIfExists(testTable, done))

    it("create the table", (done) => {
      exec(`yarn create:model ${testTable}`, 
        (err, stdout, stderr) => {
          if (err) console.log(err)
          if (stderr) {}

          expect(stdout.lastLine()).toBe(`Created ${testTable}.`)
          done()
        })
    })
  })

  context("the table does exist", () => {
    beforeAll((done) => createIfDoesntExist(testTable, done))

    it("prints a useful error message", (done) => {
      exec(`yarn create:model ${testTable}`, 
        (err, stdout, stderr) => {
          if (err) console.log(err)
          if (stderr) console.log(stderr)

          expect(stdout.lastLine()).toBe(`${testTable} already exists. Skipping.`)
          done()
        })
    })
  })
})

describe("model:destroy", () => {
  context("the table does exist", () => {
    beforeAll((done) => createIfDoesntExist(testTable, done))

    it("drops the table", (done) => {
      exec(`yarn destroy:model ${testTable}`, 
        (err, stdout, stderr) => {
          if (err) console.log(err)
          if (stderr) {}

          expect(stdout.lastLine()).toBe(`Dropped ${testTable}.`)
          done()
        })
    })
  })

  context("the table does not exist", () => {
    beforeAll((done) => dropIfExists(testTable, done))

    it("prints a useful warning message", (done) => {
      exec(`yarn destroy:model ${testTable}`, 
        (err, stdout, stderr) => {
          if (err) console.log(err)
          if (stderr) {}

          expect(stdout.lastLine()).toBe(`${testTable} does not exist. Skipping.`)
          done()
        })
    })
  })
})
