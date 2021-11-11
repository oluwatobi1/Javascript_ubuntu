var myCar = new Object()
myCar.maxSpeed = "45"
myCar.driver = "Long hair";
myCar.drive = function(){
    console.log("Driving my car");
};

var kia = {
    maxSpeed: '82',
    driver:'School Kid',
    drive: function(){
        console.log("Driver the Kia Car");
    }
}

console.log(kia.maxSpeed);
console.log(myCar.driver);

kia.drive();
myCar.drive();