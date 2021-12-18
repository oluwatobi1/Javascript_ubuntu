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