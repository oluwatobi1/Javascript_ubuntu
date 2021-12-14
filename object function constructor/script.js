var anne = {
    name: 'anne',
    yearOfBirth: 1989,
    location: 'imo',
    calculateAge: function() {
        console.log(2020 - this.yearOfBirth);
    }
}

anne.calculateAge();

var Person = function(name, yearOfBirth, location) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.location = location;
}
Person.prototype.calculateAge = function() {
    console.log(2020 - this.yearOfBirth);
}

var john = new Person('john', 1993, 'abuja')
console.log(john);

john.calculateAge();

var dill = new Person('dill', 1943, "castlevania")
dill.calculateAge()