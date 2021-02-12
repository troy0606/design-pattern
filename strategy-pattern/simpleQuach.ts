import { IQuackBehavior } from "./IQuackBehavior";

export class SimpleQuach implements IQuackBehavior{
    quach() {
        return 'quach quach';
    }
}