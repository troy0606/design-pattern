import { Beverage } from "./beverage";

export class BlackCoffee extends Beverage {
    name = '黑咖啡';
    description = '很苦，有點香';
    get cost() {
        return 100;
    }
}