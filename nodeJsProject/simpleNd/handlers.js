const querystring = require("querystring");

function indexPage(response){
    console.log("Index handler is running");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>index page</h1>");
    response.end();
}

function start(response){
	console.log("Start handler is running");
	let body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();

}

function upload(response, postData){
    console.log("Upload handler is running");
    let data = querystring.parse(postData).text;
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(`You've sent ${data}`);
    response.end();
}

let handlers = {
	"/": indexPage,
	"/start": start,
    "/upload": upload
};

module.exports = handlers;