let server = require("./server");
let router = require("./router");
let handlers = require("./handlers");

server.startServer(router.route,handlers);