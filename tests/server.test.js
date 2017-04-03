const server = require('../src/server.js')
const tape = require('tape')
const inject = require('./inject.js')

// Example test for '/string' endpoint - (failing)

tape('check the home route', (t) => {
  inject('/', (res) => {
    t.equal(res.code, 200, 'Response status code correct')
    t.end()
  })
})

tape('check string handler', t => {
  inject('/string', response => {
    t.equal(response.payload, 'Returns a string', '/string handler works')
    t.end()
  })
})

tape('check object handler', t => {
  inject('/object', response => {
    t.deepEqual(JSON.parse(response.payload), { key: 'object' }, 'object handler works')
    t.end()
  })
})

// inject can add headers to the request
tape('check the route', (t) => {
  var options = {
    url: '/object',
    method: 'GET',
    headers: {'content-type': 'text'}
  }
  inject(options, (res) => {
    t.equal(res.code, 400, 'checks handler checks for valid header')
    t.end()
  })
})
