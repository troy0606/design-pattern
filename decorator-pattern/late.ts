import { Beverage } from "./beverage";

export class Late extends Beverage {
    name = '拿鐵';
    description = '很香，有奶味';
    get cost() {
        return 10;
    }
}