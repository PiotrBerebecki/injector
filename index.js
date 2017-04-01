var server = require('./src/server.js')

server.start((err) => {
  if (err) throw err
  console.log(`Server is running on port: ${server.info.uri}`)
})
