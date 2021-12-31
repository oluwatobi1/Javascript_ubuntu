var UIController = (function() {
    var DOMstrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        addButton: ".add__btn"
    };

    return {
        getInputs: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            }
        },
        getDOMStrings: function() {
            return DOMstrings
        }
    }

})();

var budgetController = (function() {

    var Expense = function(id, description, amount) {
        this.id = id;
        this.description = description;
        this.amount = amount;
    };

    var Income = function(id, description, amount) {
        this.id = id;
        this.description = description;
        this.amount = amount;
    };
    var allData = {
        allItems: {
            inc: [],
            exp: []
        },
        total: {
            inc: 0,
            exp: 0
        },
    };

    return {
        addItems: function(type, des, val) {
            var newItem, ID;

            if (allData.allItems[type].length < 0) {
                ID = 0
            } else {
                ID = allData.allItems[type][allData.allItems[type].length - 1].id + 1
            }

            if (type === "inc") {
                newItem = Income(ID, des, val)
            } else if (type === "exp") {
                newItem = Expense(ID, des, val)
            };
            allData.allItems[type].push(newItem);
            return newItem;
        }
    }

})();


var controller = (function(uiCtrl, bgtCtrl) {
    function setupEventListeners() {
        var DOM = uiCtrl.getDOMStrings()
        var ctrlAddItem = function() {
            console.log(uiCtrl.getInputs());
        };


        document.querySelector(DOM.addButton).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event) {
            if (event.key === "Enter") {
                ctrlAddItem();
            };
        });
    };


    return {
        init: function() {
            console.log("Application has started.");
            setupEventListeners();
        }
    }

})(UIController, budgetController);

controller.init();