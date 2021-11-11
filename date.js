var myBirthday = new Date(1998, 4, 30, 14, 34, 59);
var birthday2 = new Date(1998, 4, 30, 14, 34, 59);

console.log(myBirthday.getMonth());
console.log(myBirthday.getFullYear());
console.log(myBirthday.getDate());
console.log(myBirthday.getDay());
console.log(myBirthday.getHours());
console.log(myBirthday.getTime());

if (myBirthday == birthday2) {
    console.log("The same day");
} else {
    console.log("Not.... The same day");
    
}

if (myBirthday.getTime() == birthday2.getTime()) {
    console.log("The same day");
} else {
    console.log("Not.... The same day");
    
}
