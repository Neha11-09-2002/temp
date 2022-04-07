//Globals

//console.log(__dirname);
//console.log(__filename);
//console.log(require);
//console.log(module);
//console.log(process);

/*
setInterval(() => {
    console.log('hELLO world')
},1000)*/

const names = require("./4names")
const sayHi = require("./5utils")
const data = require("./6alternatuveFlavour")
require("./7mindgrenade");

console.log(data);

sayHi("Neha");
sayHi(names.john);
sayHi(names.peter);