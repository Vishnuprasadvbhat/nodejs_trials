var http = require('http');
var date = require('./mymodule')
var url = require('url')


var server = http.createServer(function(req,res){
  res.writeHead(200, {'Content-Type':'text/plain'});
  // res.write("Current date: " + date.MydateTime() );
  // res.write(req.url)
  var q = url.parse(req.url,true).query;
  var text = q.year + " " + q.month;
  res.end(text);

  
});

server.on('listening', function(){
  console.log('Server is running')
})


server.listen(3005)