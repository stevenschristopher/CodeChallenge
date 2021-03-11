var http = require('http');
var url = require('url');

http.createServer(onRequest).listen(8888);
console.log('Server has started');

function onRequest(request, response) {
    if(request.url == '/') {
        response.writeHead(200, {'Content-type': 'text/html'});
        response.write('<html><body><p>This is home Page.</p></body></html>');
        response.end();
    }

}