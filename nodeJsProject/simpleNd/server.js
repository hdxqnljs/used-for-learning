const http = require("http");
const url = require("url");

function startServer(route,handle){
	let server = new http.Server();
	let host = "localhost";
	let port = 3000;

	server.on("request",(request, response) => {
		let pathName = url.parse(request.url).pathname;
		let postData = "";

		if(pathName == "/favicon.ico"){
			//许多浏览器默认会请求favicon.ico,忽略这个请求不处理
			return;
		}

		console.log(`request for ${pathName} received`);
		request.setEncoding("utf8");

		request.addListener("data", (postDataChunk) => {
			postData += postDataChunk;
			console.log(`Received POST data chunk ${postDataChunk}.`);
		});

		request.addListener("end", () => {
			console.log("Receive POST data is done.");
			route(pathName, handle, response, postData);
		});

	} );

	server.listen(port, host, () => {
		console.log(`Server runnig at http://${host}:${port}`);
	});
}

let server = {
	startServer: startServer
};

module.exports = server;