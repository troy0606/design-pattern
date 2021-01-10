export class Gate {

    state: IGateState;

    constructor(initial: IGateState) {
        this.state = initial;
    }

    public enter(): void {
        this.state.enter()
    }

    public pay(): void {
        this.state.pay()
    }

    public payOk(): void {
        this.state.payOk()
    }

    public payFailed(): void {
        this.state.payFailed()
    }
}