import { AddOnDecorator } from "./addOnDecorator";
import { Beverage } from "./beverage";

export class Chocolate extends AddOnDecorator {
    name = '巧克力';
    description = '甜甜苦苦的';
    beverage: Beverage;
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }
    get cost() {
        return this.beverage.cost + 20;
    }
}