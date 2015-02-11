var app = require("koa")();
var serve = require("koa-static");

var directory = __dirname;
var portNo = process.env.PORT || 3000;

app.use(serve(directory));

app.listen(portNo);

console.log("Serving files from      : " + directory);
console.log("Your site is running at : http://localhost:" + portNo);