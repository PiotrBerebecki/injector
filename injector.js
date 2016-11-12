/* --- INJECT MODULE --- */

var http = require('http')

var inject = (cb) => {
  http.get({
    hostname: 'localhost',
    port: 8080,
    path: '/',
    agent: false
  }, (res) => {
    res.on('data', data => {
      cb({ payload: data.toString() })
    })
  })
}


/* --- TESTS --- */
var tape =  require('tape')

// start the server:
var server = require('./server.js')

tape('check route', t => {
  inject(response => {
    t.equal(response.payload, 'It Works!!',  'it does work')
    t.end()
  })
})

tape('teardown', t => {
  server.close(t.end)
})
