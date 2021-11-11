var Car = function(maxSpeed, name){
    this.maxSpeed = maxSpeed
    this.name = name
    this.distance = function(speed, time){
        console.log(speed * time);
    };
    this.getName = function(){
        console.log("THis name is "+this.name);
    }
};

var myCar = new Car(24, "Small");
var myCar1 = new Car(55, "Christ");
var myCar2 = new Car(35, "Vans");
var myCar3 = new Car(57, "Mary");

console.log(myCar1.name);
myCar3.distance(45, 32);
console.log(myCar3.name);