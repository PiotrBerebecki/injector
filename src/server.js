const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
  port: 4000,
  host: 'localhost'
});

server.route([
  {
    method: 'GET',
    path: '/',
    handler: (req, res) => {
      if (req.headers['content-type'] === 'text') {
        console.log('HERE');
        res().code(400)
      }
      else {
        res('something')
      }
    }
  },
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
      res({key: 'It works'})
    }
  }
])

module.exports = server
