var paragraph = document.getElementById('content')
var button = document.getElementById('show-more')
console.log(paragraph.innerHTML);

button.onclick = function() {

    if (paragraph.className == "") {
        paragraph.className = "open"
    } else {
        paragraph.className = ""

    }

}
console.log(paragraph.className);