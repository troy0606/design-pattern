import { IFlyBehavior } from "./IFlyBehavior";

export class SimpleFly implements IFlyBehavior{
    fly() {
        return 'just flying'
    }
}