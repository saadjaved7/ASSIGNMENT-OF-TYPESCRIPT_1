
function createCar(manufacturer: string, model: string, ...options: [string, any][]) {
    const car: any = { manufacturer, model };
    for (const [key, value] of options) {
      car[key] = value;
    }
    return car;
  }
  const car = createCar('honda', 'civic', ['color', 'blue'], ['year', 2022],);
  console.log(car);
 