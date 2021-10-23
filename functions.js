function getAverage(a,b) {
    var average = (a + b )/2 // local variable
    console.log("average ", average);

    return average
}

var myResult = getAverage(4,56) // global variable
console.log("Result ", myResult);