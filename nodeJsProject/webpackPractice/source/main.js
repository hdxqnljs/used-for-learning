var greeter = require('./example');

window.onload = function () {
	document.getElementById('container').append(greeter());
};