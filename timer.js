var not = document.getElementById("notify")

function showMessage() {
    console.log("whis");
    not.className = "show"
};

setTimeout(showMessage, 3000);

var counter = 0;
var colors = ["red", "blue", "green", "black"]
var colordiv = document.getElementById("color-div")

console.log(colordiv);

function changeColor() {
    if (counter > colors.length) {
        counter = 0
    }
    colordiv.style.backgroundColor = colors[counter]
    counter++
}

var ins = setInterval(changeColor, 3000)

colordiv.onclick = function() {
    clearInterval(ins);
    colordiv.innerHTML = "Stopped"
}