class BurgerItem {
    constructor(price, cals) {
        this.price = price;
        this.cals = cals;
    }
}

class Burger {
    #sizes = {
        small: new BurgerItem(50, 10),
        big: new BurgerItem(100, 20),
    };
    #fillings = {
        cheese: new BurgerItem(10, 20),
        salad: new BurgerItem(20, 5),
        potato: new BurgerItem(15, 10),
    };
    #spices = {
        default: new BurgerItem(15, 0),
        mazik: new BurgerItem(20, 5),
    };

    #size;
    #filling;
    #spice;

    /**
     * Creates an instance of Burger
     * @param {'small' | 'big'} size - размер бургера
     * @param {'cheese' | 'salad' | 'potato'} fillings - начинка 
     * @param {'default' | 'mazik'} spice - специи
     * @memberof Burger
     */

    constructor(size, filling, spice = this.#spices.default) {
        this.#size = this.#sizes[size];
        this.#filling = this.#fillings[filling];
        this.#spice = this.#spices[spice];
        const cals = this.getCals();
        this.price = cals.price;
        this.cals = cals.cals;
    }

    getCals() {
        return {
            cals: this.#size.cals + this.#filling.cals + this.#spice.cals,
            price: this.#size.price + this.#filling.price + this.#spice.price
        };
    }

    getInfo(){
        return `Информация о бургере: 
Калорийность: ${this.cals}
Цена: ${this.price}`
    }
}

const cheeseburger = new Burger('small', 'cheese', 'mazik');
console.log(cheeseburger.getInfo());