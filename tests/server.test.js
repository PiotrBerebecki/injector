const server = require('../src/server.js');
const tape = require('tape');
const inject = require('./inject.js')(server);

// Example test for '/string' endpoint - (failing)
tape('check string handler', t => {
  const options = {
    path: '/string',
    method: 'GET',
  };
  inject(options, response => {
    t.equal(response.payload, 'Returns a string', '/string handler works!');
    t.end();
  });
});
tape('check the route', (t) => {
  var options = {
    path: '/',
    method: 'GET'
  };
  inject(options, (res) => {
    t.equal(res.statusCode, 200, 'Response status code correct');
    t.end();
  });
});


tape('check the route', (t) => {
  var options = {
    path: '/object',
    method: 'GET',
    headers: {'content-type': 'text'}
  };
  inject(options, (res) => {
    t.equal(res.statusCode, 400, 'checks handler checks for valid header');
    t.end();
  });
});


tape('check the home handler', (t) => {
  inject('/home', (res) => {
    t.equal(res.payload, 'home', 'handler is correct');
    t.end();
  });
});
