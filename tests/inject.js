const http = require('http');

const inject = (options, cb) => {
  const endpoint = typeof options === 'string' ?
   `http://localhost:4000${options}` :
  {
    hostname: options.hostname || 'localhost',
    port: options.port || 4000,
    path: options.path || '/',
    headers: options.headers
  };

  http.get(endpoint, res => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      res.payload = data;
      cb(res);
    });

  });


};

module.exports = inject;
