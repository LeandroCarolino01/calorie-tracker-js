//storage controller

//item controller
const ItemCtrl = (function(){
    // item constructor
    const item = function(id, name, calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // data structure / state
    const data = {
        items: [
            {id: 0, name: 'Steak Dinner', calories: 1200},
            {id: 0, name: 'burguer', calories: 120},
            {id: 0, name: 'cake', calories: 130}
        ],
        currentItem: null,
        totalCalories: 0
    }
    // public methods
    return {
        logData: function(){
            return data;
        }
    }
})();


// ui controller
const UICtrl = (function(){
    // public methods
    return {

    }
})();


// app controller
const App = (function(ItemCtrl, UICtrl){
    //public methods
    return {
        init: function(){
            console.log('Initializing App...');
        }
    }
})(ItemCtrl, UICtrl);


// initialize app
App.init();