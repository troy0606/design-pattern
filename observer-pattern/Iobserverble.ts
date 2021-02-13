import { IObserver } from "./Iobserver";

// have a collection to contains observers
export interface IObserverble {
    add(observer: IObserver);
    remove(observer: IObserver);
    notify(); // calling each observer instance update method
}