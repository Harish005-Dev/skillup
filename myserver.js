var http = required('http');

http.createServer(function (request, response) {
    data = "Hello, World: date is " + new Date().toLocaleDateString;
    response.end(data)
}).listen(3030)

console.log("Server is running on http://localhost:3030");