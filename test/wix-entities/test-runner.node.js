var fs = require('fs');
var path = require('path');
var esprima = require('../../esprima');
var _ = require("lodash");

var testedFiles = [
    'home.pagecomp.js',
    'button.comp.js',
    'abs.comp.js'
];

function countNodes(parent) {
    return _.reduce(parent, function (acc, child) {
        return acc + 1 + (_.isObject(child) || _.isArray(child) ? countNodes(child) : 0);
    }, 0)
}

testedFiles.forEach(function (fileName) {
    var content = fs.readFileSync(path.resolve(__dirname, fileName)).toString();
    var result = esprima.parse(content);
    console.log('%s parsed (%d nodes)', fileName, countNodes(result));
});