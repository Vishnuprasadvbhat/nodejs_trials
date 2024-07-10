var http = require('http')
var fs =require('fs')


var Server= http.createServer(function(req, res){
  fs.readFile('./index.html', function(err,data){
  res.writeHead(200,{ 'Content-Type': 'text/plain'});
  res.write(data);
  return res.end();
  });
}).listen(3005)