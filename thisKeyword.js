console.log(this);

var myCar = {
    drive: function(){
        console.log(this);
    }
}

var usingThis = {
    name:"TCS Foods",
    getName: function(){
        console.log("the name is ", this.name);
    }
}

myCar.drive();
usingThis.getName();