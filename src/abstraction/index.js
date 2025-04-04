var Car = /** @class */ (function () {
    function Car(brand, model) {
        this.brand = brand;
        this.model = model;
        this.speed = 0;
    }
    Car.prototype.accelerate = function () {
        this.speed += 10;
    };
    Car.prototype.break = function () {
        this.speed -= 10;
    };
    Car.prototype.getSpeed = function () {
        return this.speed;
    };
    return Car;
}());
// Create a car object
var myCar = new Car("Mercedes Benz", "Amg350");
// Accelerate the car
myCar.accelerate();
// Get the current speed
console.log("Current Speed:", myCar.getSpeed());
console.log("My car", myCar);
