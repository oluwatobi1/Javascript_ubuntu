var form = document.forms.mForm
var message = document.getElementById('message')
console.log(form);
console.log(message);


form.onsubmit = function() {
    if (form.name.value == "") {
        form.name.style.border = "4px solid pink"
        message.innerHTML = "Please Enter Name"
        return false
    } else {
        form.name.style.border = null
        return true

    }
}