const http = require('http');

const inject = (options, cb) => {
  http.get({
    hostname: options.hostname || 'localhost',
    port: options.port || 4000,
    path: options.path || '/',
  }, res => {
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
