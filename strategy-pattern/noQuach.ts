import { IQuackBehavior } from "./IQuackBehavior";

export class NoQuach implements IQuackBehavior{
    quach() {
        return 'silent';
    }
}