const menu = {
    _meals: ['Le Pasta de Monnefic', 'Chicken Curry', 'Ceasar Salad', 'XXL Pizza', 'Lobster Stew'],
    _prices: [100, 150, 80, 120, 50],
    _meal: '',
    _price: 0,

    set todaysSpecial(index) {
        if (index >= 0 && index < this._meals.length) {
            this._meal = this._meals[index];
            this._price = this._prices[index];
        } else {
            console.log('Invalid index for setting today\'s special.');
        }
    },

    get todaysSpecial() {
        if (this._meal !== '' && this._price !== 0) {
            console.log(`Today's Special is ${this._meal} for ${this._price}\$!`);
        } else {
            console.log('Meal or price was not set correctly!');
        }
    }
};

// Set today's special randomly
const randomIndex = Math.floor(Math.random() * menu._meals.length);
menu.todaysSpecial = randomIndex;

// Get and display today's special
menu.todaysSpecial;
