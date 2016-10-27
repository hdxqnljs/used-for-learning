const http = require("http");

function startServer(){
	let server = new http.Server();
	let host = "localhost";
	let port = 3000;

	server.on("request",(req, res) => {
		res.writeHead(200, {"Content-Type": "text/plain"});
		res.write("a simple server");
		res.end();
	} );

	server.listen(port, host, () => {
		console.log(`Server runnig at http://${host}:${port}`);
	});
}

module.exports = startServer;