## F&C morning challenge

##### What
Build a tool called `inject`, which makes requests to your server

##### Why
We want to be able to test our server is responding to requests appropriately

##### How
You can use the node core modules to help. We will be using Tape as our testing framework.

##### Interface
At its most basic level `inject` takes a callback which will be run once **all** the data has come back from the server.  That data can be accessed by `response.payload`

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

Stretch goals:
 - `inject(url, method, cb)` -> as in full url
 - `var inject = require('inject')(server)` -> 'register' the module with your server so that it knows where to listen, now we only need to pass it a path
