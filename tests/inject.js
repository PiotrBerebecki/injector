const http = require('http');

const inject = (cb) => {
  // Code...
  // what core node modules might you need here?
  http.get('http://localhost:4000/string', res => {

    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {

      cb({payload: data});
    });

  });


};

module.exports = inject;
