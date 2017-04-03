## Testing your Hapi server - Build inject method

#### What
Build a tool called `inject`, which makes requests to your server.

#### Why
We want to be able to test our server is routing and responding to requests appropriately. Hapi.js has its own inject method, which is called upon the server (it uses the shot module behind the scenes). You'll be creating something similar.

#### How

> In server.js you'll see a hapi server with some basic routes.

> In server.test.js there are some passing tests using hapi's server.inject. These are for inspiration and should indirectly inform you on what your inject module should do.

You can use the node core modules to help. We will be using [Tape]('https://github.com/substack/tape') as our testing framework.

- ```git clone``` this repo

- ```npm install```

- Run your server with ```npm start```

- Execute your tests (in another tab) with ```npm test```


#### Interface
At its most _basic level_ `inject` takes a callback which will be run once **all** the data has come back from the server.  That data can be accessed by `response.payload`

Eg:
```js
tape('check route', t => {
  inject(response => {
    t.equal(response.payload, 'It Works!!',  'it does work')
    t.end()
  })
})
```

#### Further Instructions

Think about building upon your inject method so that it can take a url and method:
 - `inject(options, cb)` -> as in full url

'Register' the module with your server so that it knows where to listen, now we only need to pass it a path

 - `var inject = require('inject')(server)`

_Play around and write more detailed tests for the routes & handlers_

##### Extras

 - Deploy to npm for use in future projects.
 - Build a 'test runner' and pipe your tests through it using the script in your package.json:
 ```
"testRunner": "node tests/server.test.js | node tests/test-runner.js"
```
