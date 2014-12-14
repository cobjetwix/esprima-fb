var fs = require('fs');
var path = require('path');
var esprima = require('../../esprima');

var testedFiles = ['home.pagecomp.js'];

testedFiles.forEach(function (fileName) {
    var content = fs.readFileSync(path.resolve(__dirname, fileName)).toString();
    var result = esprima.parse(content);
    console.log('%s parsed', fileName);
});