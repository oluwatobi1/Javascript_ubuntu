var UIController = (function() {
    var num = 23;

    function add(item) {
        var sum = num + item;
    };

    return {
        publicItem: function(a) {
            return add(a);
        }
    };

})();

var budgetController = (function() {
    console.log(
        'This is the budget controller'
    )
})();


var controller = (function(uiCtrl, bgtCtrl) {

    var x = uiCtrl.publicItem(3)

    return {
        testItem: function() {
            console.log("this is the; ", x)
        }
    }

})(UIController, budgetController);