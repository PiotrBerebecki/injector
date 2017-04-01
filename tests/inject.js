const http = require('http')

const inject = (options, cb) => {
  options = (typeof options === 'string' ? { url: options } : options)

  http.get({
    hostname: 'localhost',
    port: 4000,
    headers: options.headers,
    path: options.url,
    agent: false
  }, (res, err) => {
    if (err) {
      console.log(err)
    }

    let str = ''

    res.on('data', data => {
      str += data
    })

    res.on('end', () => {
      cb({ payload: str, code: res.statusCode })
    })
  })
}

module.exports = inject
