function objwork(){

    this.greeting = "greet3",
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports  = new objwork();