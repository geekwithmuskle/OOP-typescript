// Pizza Shop Example using Factory Method Pattern
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Concrete Products: Different types of pizzas
var MargheritaPizza = /** @class */ (function () {
    function MargheritaPizza() {
    }
    MargheritaPizza.prototype.prepare = function () {
        return "Preparing Margherita: Thin crust, tomato sauce, mozzarella, basil!";
    };
    return MargheritaPizza;
}());
var PepperoniPizza = /** @class */ (function () {
    function PepperoniPizza() {
    }
    PepperoniPizza.prototype.prepare = function () {
        return "Preparing Pepperoni: Thick crust, tomato sauce, double pepperoni, extra cheese!";
    };
    return PepperoniPizza;
}());
// Abstract Creator: The pizza kitchen blueprint
var PizzaKitchen = /** @class */ (function () {
    function PizzaKitchen() {
    }
    // Common operation for all kitchens
    PizzaKitchen.prototype.makePizza = function () {
        var pizza = this.createPizza();
        return "Kitchen is working: ".concat(pizza.prepare());
    };
    return PizzaKitchen;
}());
// Concrete Creators: Specific pizza kitchens
var MargheritaKitchen = /** @class */ (function (_super) {
    __extends(MargheritaKitchen, _super);
    function MargheritaKitchen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MargheritaKitchen.prototype.createPizza = function () {
        return new MargheritaPizza();
    };
    return MargheritaKitchen;
}(PizzaKitchen));
var PepperoniKitchen = /** @class */ (function (_super) {
    __extends(PepperoniKitchen, _super);
    function PepperoniKitchen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PepperoniKitchen.prototype.createPizza = function () {
        return new PepperoniPizza();
    };
    return PepperoniKitchen;
}(PizzaKitchen));
// Client function - doesn't need to know about specific pizza types
function orderPizza(kitchen) {
    console.log("Order received: We're making your pizza...");
    console.log(kitchen.makePizza());
}
// Usage Example
console.log("Customer 1 orders Margherita");
orderPizza(new MargheritaKitchen());
console.log("\nCustomer 2 orders Pepperoni");
orderPizza(new PepperoniKitchen());

