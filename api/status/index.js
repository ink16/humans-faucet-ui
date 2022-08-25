const app = require('express')()
const bodyParser = require('body-parser')
const fetch = require('node-fetch')

app.use(bodyParser.json())

app.all('/', async (req, res) => {

  const processed = {
    overall_balance: {
      holder: {
        address: "human1dfjns5lk748pzrd79z4zp9k22mrchm2axtg8at",
        balance: "49000000000000",
      },
      distributors: []
    },
    refill_needed:0,
  }

  return res.json( processed )
})

module.exports = app
