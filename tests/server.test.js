const server = require('../src/server.js')
const tape = require('tape')
const inject = require('./inject.js')

// tape('Is the server running?', (t) => {
//   server.start(err => {
//     if (err) {
//       t.error(err)
//     } else {
//       t.pass('server is running')
//     }
//     server.stop()
//     t.end()
//   })
// })

tape('check the home route', (t) => {
  inject('/', (res) => {
    t.equal(res.code, 200, 'Response status code correct')
    t.end()
  })
})

tape('check string handler', t => {
  inject('/string', response => {
    t.equal(response.payload, 'It works', 'it does work')
    t.end()
  })
})

tape('check object handler', t => {
  inject('/object', response => {
    t.deepEqual(JSON.parse(response.payload), { key: 'It works' }, 'it does work')
    t.end()
  })
})

// inject can add headers to the request
tape('check the route', (t) => {
  var options = {
    url: '/',
    method: 'GET',
    headers: {'content-type': 'text'}
  }
  inject(options, (res) => {
    t.equal(res.code, 400, 'checks handler checks for valid header')
    t.end()
  })
})

// Hapi server.inject tests for comparison

tape('check the route', (t) => {
  var options = {
    url: '/',
    method: 'GET'
  }
  server.inject(options, (res) => {
    t.equal(res.statusCode, 200, 'Response status code correct')
    t.end()
  })
})

tape('check the main handler', (t) => {
  server.inject('/', (res) => {
    t.equal(res.payload, 'success', 'handler is correct')
    t.end()
  })
})

tape('check the home handler', (t) => {
  server.inject('/home', (res) => {
    t.equal(res.payload, 'home', 'handler is correct')
    t.end()
  })
})

tape('check the route', (t) => {
  var options = {
    url: '/',
    method: 'GET',
    headers: {'content-type': 'text'}
  }
  server.inject(options, (res) => {
    t.equal(res.statusCode, 400, 'checks handler checks for valid header')
    t.end()
  })
})
