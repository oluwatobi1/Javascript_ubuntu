// IIFE -> Immediately Invoked Function Expression

(function(luck) {
    var score = Math.random() * 10 + luck
    console.log(score >= 5, score);
})(3);