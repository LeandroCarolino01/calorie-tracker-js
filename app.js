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
            {id: 1, name: 'burguer', calories: 120},
            {id: 2, name: 'cake', calories: 130}
        ],
        currentItem: null,
        totalCalories: 0
    }
    // public methods
    return {
        getItems: function(){
            return data.items;
        },
        logData: function(){
            return data;
        }
    }
})();


// ui controller
const UICtrl = (function(){
    const UISelectors = {
        itemList: '#item-list'
    }
    // public methods
    return {
        populateItemList: function(items){
            let html = '';

            items.forEach(function(item){
                html += `
               <li class="collection-item" id="item-${item.id}">
                    <strong>${item.name}: </strong><em>${item.calories}</em>
                    <a href="#" class="secondary-content">
                        <i class="edit-item fa fa-pencil"></i>
                    </a>
                </li>
                `
            });

            // Insert list items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        }
    }
})();


// app controller
const App = (function(ItemCtrl, UICtrl){
    //public methods
    return {
        init: function(){
            // Fetch items from data structure
            const items = ItemCtrl.getItems();

            // populate list with items
            UICtrl.populateItemList(items);
        }
    }
})(ItemCtrl, UICtrl);


// initialize app
App.init();