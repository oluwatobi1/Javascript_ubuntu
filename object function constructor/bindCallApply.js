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
}

john.presentation('formal', "morning")