var http = require("http");

var server = http.createServer();

server.on('require', function (request, response) {
    console.log(request.url);
});

server.listen(3000, function () {
    console.log("server running ...");
});