// Two ways of creating objects:
// object create and function constructor 

// Object create => Object.create
// function constructor => new function

// Object create mtd

var personProto = {
    calculateAge: function() {
        console.log(2020 - this.yearOfBirth);
    }
}

var varane = Object.create(personProto, {
    name: { value: "varane" },
    yearOfBirth: { value: 1998 },
    job: { value: "house worker" },
});


var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person.prototype.calculateAge = function() {
    console.log(2021 - this.yearOfBirth);
}
var maiores = new Person("maiores", 1092, "vampire");