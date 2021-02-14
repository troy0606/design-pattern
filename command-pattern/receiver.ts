export class Receiver {
    private _history = [];

    get history() {
        return this._history
    }

    set history(val) {
        const temp = [...val ,...this._history];
        this._history = temp
    }

    on() {
        console.log('turn on')
        this.history = ['on']
    }

    off() {
        console.log('turn off')
        this.history = ['off']
    }

    up() {
        console.log('light up')
        this.history = ['up']
    }
    
    down() {
        console.log('light down')
        this.history = ['down']
    }
    
    undo() {
        this.history.shift();
    }

    nowStatus() {
        console.log('now status is ' + this.history[0])
    }
}