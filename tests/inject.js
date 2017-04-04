const http = require('http');
const url = require('url');

module.exports = server => (options, cb) => {
  server.start(err => {
    if (err) console.log(err);

    const urlParts = url.parse(server.info.uri);

    const endpoint = typeof options === 'string' ?
    `${server.info.uri}${options}` :
    {
      hostname: urlParts.hostname || 'localhost',
      port: urlParts.port || 4000,
      path: options.path || '/',
      headers: options.headers,
    };

    http.get(endpoint, res => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        res.payload = data;
        server.stop(() => {
          cb(res);
        });
      });
    });
  });
};
