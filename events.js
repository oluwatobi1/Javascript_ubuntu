function setUpEvents() {

    var paragraph = document.getElementById('content')
    var button = document.getElementById('show-more')

    button.onclick = function() {

        if (paragraph.className == "") {
            paragraph.className = "open"
            button.innerHTML = "Show Less"
        } else {
            paragraph.className = ""
            button.innerHTML = "Show More"

        }

    }
}
window.onload = function() {
    setUpEvents()
}