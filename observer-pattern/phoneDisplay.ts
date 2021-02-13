import { IDisplay } from "./Idisplay";
import { IObserver } from "./Iobserver";
import { IObserverble } from "./Iobserverble";
import { WeatherStation } from "./weatherStation";

export class PhoneDisplay implements IObserver, IDisplay {
    station: WeatherStation;
    constructor(station: WeatherStation) {
        this.station = station;
    }
    upadte() {
        this.display();
    }
    display() {
        console.log(this.station.getTemperature())
    }
    
}