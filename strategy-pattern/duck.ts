import { SimpleQuach } from './simpleQuach';
import { IFlyBehavior } from "./IFlyBehavior";
import { IQuackBehavior } from "./iQuackBehavior";
import { SimpleFly } from './simpleFly';
import { JetFly } from './jetFly';
import { NoQuach } from './noQuach';

export class Duck {
    flyBehavior: IFlyBehavior;
    quachBehavior: IQuackBehavior;
    constructor(
        fly: IFlyBehavior,
        quach: IQuackBehavior,
    ){
        this.flyBehavior = fly;
        this.quachBehavior = quach;
    }

}

const simpleDuck = new Duck(new SimpleFly(),new SimpleQuach());
console.log('fly: '+ simpleDuck.flyBehavior.fly()+'; quach: '+ simpleDuck.quachBehavior.quach());
const mechineDuck = new Duck(new JetFly(),new NoQuach());
console.log('fly: '+ mechineDuck.flyBehavior.fly()+'; quach: '+ mechineDuck.quachBehavior.quach())