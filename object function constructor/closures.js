// Closure: an inner function always has access to the variable declared in its outer function 
// even when the function is returned

function isOfAge(retirement) {
    var a = " years left"
    return function(yearOfBirth) {
        var age = 2021 - yearOfBirth
        return retirement - age;
    };
};

var john = isOfAge(60);
console.log(john(1998));

function interviewQuestion(job) {
    var a = " what do designers do?"
    var b = " how long have you been teaching?"
    var c = " what is your occupation?"

    return function(name) {
        if (job === "designer") {
            console.log(name + a);
        } else if (job === "teacher") {
            console.log(name + b);
        } else {
            console.log(name + c);
        };
    };
};


var dillDoe = interviewQuestion('teacher')
dillDoe('dill Doe')

var annePosition = interviewQuestion('designer')
annePosition("Annie Position")