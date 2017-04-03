const Hapi = require('hapi')
const Inert = require('inert')
const server = new Hapi.Server()

server.connection({
  port: 4000,
  host: 'localhost'
})

// Route for serving static files (index.html)
server.register(Inert, (err) => {
  if (err) console.log(err)

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'public'
      }
    }
  })
})

// Other routes to be tested
server.route([
  {
    method: 'GET',
    path: '/string',
    handler: (req, res) => {
      res('Returns a string')
    }
  },
  {
    method: 'GET',
    path: '/object',
    handler: (req, res) => {
      if (req.headers['content-type'] === 'text') {
        res().code(400)
      } else {
        res({key: 'object'})
      }
    }
  },
  {
    method: 'GET',
    path: '/home',
    handler: (req, res) => {
      res('home')
    }
  }
])

module.exports = server
