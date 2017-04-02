const Hapi = require('hapi')
const Inert = require('inert')
const server = new Hapi.Server()

server.connection({
  port: 4000,
  host: 'localhost'
})

// Inert for serving static files
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
      res('It works')
    }
  },
  {
    method: 'GET',
    path: '/object',
    handler: (req, res) => {
      if (req.headers['content-type'] === 'text') {
        res().code(400)
      } else {
        res({key: 'It works'})
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
