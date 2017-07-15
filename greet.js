// var greet = function() {
// 	console.log('Hello!');
// };

// module.exports = greet;

     var person =
     {
     firstname:"mayank",
     lastname:"agrawal",
     greetings: function()
     {
         console.log("hello this is from greetings" + this.firstname + this.lastname);
     }
     }
person.greetings();
     module.exports = person.greetings;