var connect = require('connect');
var serveStatic = require('serve-static');
var args = process.argv.splice(2);

var ip = args[0] || 'localhost';
var port = args[1] || '3000';

connect().use(serveStatic(__dirname+'/$/')).listen(port, ip, () => {
	console.log(`LOCAL SERVER running on "http://${ip}:${port}/"`);
});