const http = require("http");

// http.createServer(function(req,res) {
// 		res.writeHead(200,{'Content-Type':'text/html'});
// 		res.write("<h1>node.js</h1>");
// 		res.end("<p>http server2</p>");
// }).listen(3000,"localhost",function(){
//		console.log("http server is listening at port 3000.");
//});
//以上是简便写法，完整写法如下
var server = new http.Server();
server.on("request",function(req,res){
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write("<h1>node.js</h1>");
		res.end("<p>http server2</p>");
});
server.listen(3000);
console.log("http server is listening at port 3000.");
//使用supervisor命令代替node命令执行js文件，可以监听代码变化，自动重启进程，方便调试代码