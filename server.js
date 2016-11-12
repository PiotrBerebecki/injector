var http = require('http');
var PORT = 8080;
function handleRequest(request, response){
    response.end('It Works!!');
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});

module.exports = server;
