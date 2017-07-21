//var greet = require('./greet');
//var requiremore = require("./requiremore");
var fs = require('fs');
var zlib = require('zlib');
//the readable stream will create a stream through which the data flow in the form of a chunk and the chunk data is first stor in 
//buffer and once the data reaches in buffer it will emit buffer size will be described by higmask
//1 byte =8 bit  //1kb =1024byte
//pipe connecting two stream from writable stream the content which hasto be write from the readable stream
//chaning a method return an object and we keep calling the other method reetun by that object.
var readablefile = fs.createReadStream(__dirname + "/greet.txt", { encoding: 'utf8', highWaterMark: 16 * 1024 });
var writeable = fs.createWriteStream(__dirname + "/greetcopy.txt");
var compressed = fs.createWriteStream(__dirname + "/greetcopy.txt.gz");

//this is not a filestream it is used to transform the data means change the data
var glib = zlib.createGzip();

readablefile.pipe(writeable);

readablefile.pipe(glib).pipe(compressed);
/*readablefile.on("data",function(chunk){
console.log(chunk.length);
writeable.write(chunk);

});

//requiremore.english();
//requiremore.hindi();


//greet();

//person.greetings();

//prototypalinheritance and function constructor

function Person(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}
//var firstname = "raja";//we have used this keyword to point towards the object not the variable
Person.prototype.manage  = function()
{
    console.log("this person has been managed by" + this.firstname +this.lastname);
}

var rahul = new Person("John","abhrahim");

console.log(rahul.firstname);
rahul.manage();

//pass by value

function change(b)
{
b =5;
console.log(b);
}
var a = 4;
change(a);
console.log(a);

//pass by reference

function changeobj(d){
d.prop1 = "name";
}

var s ={};
s.prop1 = {};
changeobj(s);
console.log(s);

//IIFE imediteatly invoke function

(function kapil(){

    var first ="sharma";
    console.log(first);
}())*/