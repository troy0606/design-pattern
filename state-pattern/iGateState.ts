interface IGateState {
    enter(): void 
    pay(): void 
    payOk(): void 
    payFailed(): void
}