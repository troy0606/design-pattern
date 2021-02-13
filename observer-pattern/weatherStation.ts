import { IObserver } from "./Iobserver";
import { IObserverble } from "./Iobserverble";
import { PhoneDisplay } from "./phoneDisplay";

export class WeatherStation implements IObserverble {
    temperature = 60;
    observerList: Array<IObserver> = [];
    add(observer: IObserver) {
        this.observerList.push(observer);
    }
    remove(deleteObserver: IObserver) {
        const deleted = this.observerList.filter(observer => observer !== deleteObserver);
        this.observerList = deleted;

    }
    notify() {
        this.observerList.forEach(observer => observer.upadte())
    }
    getTemperature() {
        return this.temperature;
    }
}

const station = new WeatherStation();
const display = new PhoneDisplay(station);
const display2 = new PhoneDisplay(station);
station.add(display);
station.add(display2);

station.remove(display)
station.notify();