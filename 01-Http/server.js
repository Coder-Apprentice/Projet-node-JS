const http = require("http");

http.createServer(function(req,res){
    res.end('Bonjour Serveur Allan ')
}).listen(3000,"127.0.0.1")

console.log('Server running at http://127.0.0.1:3000/');