import { AddOnDecorator } from "./addOnDecorator";
import { Beverage } from "./beverage";

export class Caramel extends AddOnDecorator {
    name = '焦糖';
    description = '甜甜的';
    beverage: Beverage;
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }
    get cost() {
        return this.beverage.cost + 20;
    }
}