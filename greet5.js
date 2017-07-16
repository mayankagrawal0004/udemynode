function Objwork(){
    this.greeting ="hello from greet5";
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports  = Objwork;