const exec = require("child_process").exec

describe("model:create", () => {
  context("the table does not exist", () => {
    beforeAll((done) => {
      exec(`psql -d test_db -c "DROP TABLE IF EXISTS test_table"`, (err, stdout, stderr) => {
        if (err) console.log(err)
        if (stderr) console.log(stderr)
        done()
      })
    })

    it("create the table", (done) => {
      exec("yarn create:model test_table", 
        (err, stdout, stderr) => {
          if (err) console.log(err)
          if (stderr) console.log(stderr)

          expect(stdout.lastLine()).toBe("Created test_table.")
          done()
        })
    })
  })

  context("the table does exist", () => {
    beforeAll((done) => {
      exec(`psql -d test_db -c "CREATE TABLE IF NOT EXISTS test_table()"`, (err, stdout, stderr) => {
        if (err) {}
        if (stderr) {}
        done()
      })
    })

    it("prints a useful error message", (done) => {
      exec("yarn create:model test_table", 
        (err, stdout, stderr) => {
          if (err) console.log(err)
          if (stderr) console.log(stderr)

          expect(stdout.lastLine()).toBe("test_table already exists. Skipping.")
          done()
        })
    })
  })
})
