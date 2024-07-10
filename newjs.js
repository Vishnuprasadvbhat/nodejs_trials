var http = require('http');
var date = require('./mymodule')


var server = http.createServer(function(req,res){
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.write("Current date: " + date.MydateTime() );
  res.end('Hello world')

  
});

server.on('listening', function(){
  console.log('Server is running')
})


server.listen(3005)