var fs = require("fs");

var buf = fs.readFileSync(process.argv[2]);

var s = buf.toString();
var ar = s.split('\n');
var num = ar.length - 1;
console.log(num);