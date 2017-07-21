//modulep pattern
//1 simple scenariohow we wuse exports

var greet1 = require("./greet1");

greet1();

//2 we define property in module.exports like module.exports.greet so it is call with require that property

var greet2 = require("./greet2").greet;

greet2();

//3 when we define a new object in greet3 and then use require function twice too call greet3 in modulepattern than the second object will be 
//overriden by 1 object

var greet3 = require("./greet3");
greet3.greet();
greet3.greeting = "greet3 is in process of changes";

var greet4 = require("./greet3");
greet4.greet();

//4 to create a new object every time with same require path we will define a constructor in require path

var greet5 = require("./greet5");
var greet = new greet5();
greet.greet();


//exports and module.exports are two different thing but they point to same object like pass by reference 