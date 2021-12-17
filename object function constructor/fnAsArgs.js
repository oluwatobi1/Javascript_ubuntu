// Call back function: passing function as arguments

var years = [1993, 2004, 2006, 1992, 1984, 1997, 1982, 1988]


function arrCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]))
    };
    return arrRes;
};


function calculateAge(el) {
    return 2020 - el;
};

function isFullAge(el) {
    return el >= 18;
};

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round((206.5) - (0.605 * el));
    };
};
var ages = arrCalc(years, calculateAge)

var ofAge = arrCalc(ages, isFullAge)
console.log("ofAge ", ofAge);

var rate = arrCalc(ages, maxHeartRate)
console.log("rate ", rate);