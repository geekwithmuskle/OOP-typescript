// Pizza Shop Example using Factory Method Pattern

// Product Interface: Defines what all Pizzas can do
interface Pizza {
    prepare(): string;
}

// Concrete Products: Different types of pizzas
class MargheritaPizza implements Pizza {
    prepare(): string {
        return "Preparing Margherita: Thin crust, tomato sauce, mozzarella, basil!";
    }
}

class PepperoniPizza implements Pizza {
    prepare(): string {
        return "Preparing Pepperoni: Thick crust, tomato sauce, double pepperoni, extra cheese!";
    }
}

// Abstract Creator: The pizza kitchen blueprint
abstract class PizzaKitchen {
    // Factory Method (abstract - must be implemented by subclasses)
    public abstract createPizza(): Pizza;

    // Common operation for all kitchens
    public makePizza(): string {
        const pizza = this.createPizza();
        return `Kitchen is working: ${pizza.prepare()}`;
    }
}

// Concrete Creators: Specific pizza kitchens
class MargheritaKitchen extends PizzaKitchen {
    public createPizza(): Pizza {
        return new MargheritaPizza();
    }
}

class PepperoniKitchen extends PizzaKitchen {
    public createPizza(): Pizza {
        return new PepperoniPizza();
    }
}

// Client function - doesn't need to know about specific pizza types
function orderPizza(kitchen: PizzaKitchen) {
    console.log("Order received: We're making your pizza...");
    console.log(kitchen.makePizza());
}

// Usage Example
console.log("Customer 1 orders Margherita");
orderPizza(new MargheritaKitchen());

console.log("\nCustomer 2 orders Pepperoni");
orderPizza(new PepperoniKitchen());
