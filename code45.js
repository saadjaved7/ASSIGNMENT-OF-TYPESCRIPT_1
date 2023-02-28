"use strict";
function createCar(manufacturer, model, ...options) {
    const car = { manufacturer, model };
    for (const [key, value] of options) {
        car[key] = value;
    }
    return car;
}
const car = createCar('Toyota', 'Camry', ['color', 'blue'], ['year', 2022], ['trim', 'LE']);
console.log(car);
