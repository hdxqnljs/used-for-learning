'use strict';
const fs = require("fs");

function print(src){
	let data = fs.readFileSync(src,"utf-8");
	console.log("=== strat ===");
	console.log(data);
	console.log("=== end ===");
}

module.exports = print;