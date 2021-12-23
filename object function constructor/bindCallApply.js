// Lecture: Bind Call and apply

var john = {
    name: "John",
    age: 26,
    job: "teacher",
    presentation: function(style, timeOfDay) {
        if (style === "formal") {
            console.log("Good " + timeOfDay + " Ladies and Gentlemen! " +
                "I'm " + this.name + " I'm ", this.age, " years old." +
                " I am a ", this.job);
        } else {
            console.log("Hey " + "I'm " + this.name + " I'm ", this.age, " years old." +
                " I am a ", this.job + ". Have a lovely ", timeOfDay);
        }
    }
};

john.presentation('formal', "morning");
john.presentation('friendly', "afternoon");


var emily = {
    name: "emily",
    age: 45,
    job: "designer"
};

john.presentation.call(emily, "friendly", "afternoon")

var saul = {
    name: "Saul",
    age: 23,
    job: "paster"
};

john.presentation.call(saul, "formal", 'evening')

john.presentation.apply(emily, ['formal', "evening"])

// using bind for carrying 

var johnFormal = john.presentation.bind(john, "formal")

johnFormal('night')
var emilyFriendly = john.presentation.bind(emily, "friendly");
emilyFriendly('evening');


// use binding for