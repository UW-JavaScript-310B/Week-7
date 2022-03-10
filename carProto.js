/**
 * Car class
 * @constructor
 * @param {String} model
 */


class Car{

    constructor(model){
        this.model = model;
        this.currentSpeed = 0;
        
    }

    accelerate(){
        this.currentSpeed++;
    }
    brake(){
        this.currentSpeed--;
    }

    toString(){
        console.log(`This ${this.model} is moving with ${this.currentSpeed}ms speed!`);

    }
}

let newCar = new Car('Mercedes');
newCar.accelerate();
newCar.accelerate();
newCar.brake();
newCar.toString();





//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

class ElectricCar extends Car{

    constructor(model){
       super(model);
       super.accelerate();
       super.brake();
    }
  
    toString(){
        console.log(`This is new Model ${this.model} is moving with ${this.currentSpeed}ms speed!`);
    }
}

let brandNewCar = new ElectricCar('Audi');
brandNewCar.accelerate();
brandNewCar.accelerate();
brandNewCar.brake();
brandNewCar.toString();