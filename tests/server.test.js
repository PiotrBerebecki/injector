const server = require('../src/server.js')
const tape = require('tape')
const inject = require('./inject.js')

// Example test for '/string' endpoint - (failing)
tape('check string handler', t => {
  inject(response => {
    t.equal(response.payload, 'Returns a string', '/string handler works!')
    t.end()
  })
})

// Write your tests here


/**** Passing tests using Hapi's server.inject for inspiration

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

tape('check the route', (t) => {
  var options = {
    url: '/object',
    method: 'GET',
    headers: {'content-type': 'text'}
  }
  server.inject(options, (res) => {
    t.equal(res.statusCode, 400, 'checks handler checks for valid header')
    t.end()
  })
})

tape('check the home handler', (t) => {
  server.inject('/home', (res) => {
    t.equal(res.payload, 'home', 'handler is correct')
    t.end()
  })
})

****/
