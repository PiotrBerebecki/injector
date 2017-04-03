## Testing your Hapi server - Build inject method

#### What
Build a tool called `inject`, which makes requests to your server. You might do this in a TDD way.

#### Why
We want to be able to test our server is routing and responding to requests appropriately.

#### How
You can use the node core modules to help. We will be using [Tape]('https://github.com/substack/tape') as our testing framework.

- ```git clone``` this repo

- ```npm install```

- Run your server with ```npm start```

- Execute your tests (in another tab) with ```npm test```

_you might consider running your server within the test suite_

#### Interface
At its most basic level `inject` takes a callback which will be run once **all** the data has come back from the server.  That data can be accessed by `response.payload`

Eg:
```js
tape('check route', t => {
  inject(response => {
    t.equal(typeof response, 'object',  'response is an object')
    t.equal(typeof response.payload, 'string',  'data from server is a string')
    t.equal(response.payload, 'It Works!!',  'it does work')
    t.end()
  })
})
```

#### Further Instructions

Think about building upon your inject method so that it can take a url and method:
 - `inject(url, method, cb)` -> as in full url

'Register' the module with your server so that it knows where to listen, now we only need to pass it a path

 - `var inject = require('inject')(server)`

_Play around and write more detailed tests for your handlers using other core node modules._

##### Extras

 - Deploy to npm for use in future projects
 - build a 'test runner' and pipe your tests through it using the script in your package.json:
 ```
"testRunner": "node tests/server.test.js | node tests/test-runner.js"
```
