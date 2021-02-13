import { IObserver } from "./Iobserver";
import { IObserverble } from "./Iobserverble";

export class ConcreateObserverble implements IObserverble {
    add(observer: IObserver) {
        throw new Error("Method not implemented.");
    }
    remove(observer: IObserver) {
        throw new Error("Method not implemented.");
    }
    notify() {
        throw new Error("Method not implemented.");
    }

    getState() {

    }

    // setState() {}
    
}