class OpenGateState implements IGateState {
    openGateState: IGateState;
    constructor(gateState: IGateState) {
        this.openGateState = gateState;
    }
    enter(): void {
        throw new Error("Method not implemented.");
    }
    pay(): void {
        throw new Error("Method not implemented.");
    }
    payOk(): void {
        throw new Error("Method not implemented.");
    }
    payFailed(): void {
        throw new Error("Method not implemented.");
    }
    
}