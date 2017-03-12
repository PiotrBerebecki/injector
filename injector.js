/* --- INJECT MODULE --- */

var http = require('http')

var inject = (path, cb) => {
  http.get({
    hostname: 'localhost',
    port: 8080,
    path: path,
    agent: false
  }, (res) => {
    var str = ''

    res.on('data', data => {
      str += data
    })

    res.on('end', () => {
      cb({ payload: str })
    })
  })
}



/* --- TESTS --- */
var tape = require('tape')

// start the server:
var server = require('./server.js')

tape('check string route', t => {
  inject('/string', response => {
    t.equal(response.payload, 'It Works!!',  'it does work')
    t.end()
  })
})

tape('check object route', t => {
  inject('/object', response => {
    t.deepEqual(JSON.parse(response.payload), { key: 'It Works' },  'it does work')
    t.end()
  })
})

tape('teardown', t => {
  server.close(t.end)
})
