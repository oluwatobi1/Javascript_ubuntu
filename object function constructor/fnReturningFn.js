function interviewQuestion(job) {
    if (job === "designer") {
        return function(name) {
            console.log(name, " how many years have you been a designer");
        }
    } else if (job === "teacher") {
        return function(name) {
            console.log(name, " do you like teaching?");
        }
    } else {
        return function(name) {
            console.log("Hey ", name, " what do you do?.");
        }
    }
}

var designerQuestion = interviewQuestion('designer')
designerQuestion("Samuel")

var teacherQuestion = interviewQuestion('teacher')
teacherQuestion("Helen")

var randomQuestion = interviewQuestion("student")
randomQuestion("Nonso")


interviewQuestion('teacher')('Matthew')
interviewQuestion('nurse')('Afo')
interviewQuestion('linguist')('Helen')