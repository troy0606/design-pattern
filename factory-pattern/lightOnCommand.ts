import { Icommand } from "./Icommand";

export class LightOnCommand implements Icommand {
    public light;
    constructor(light) {
        this.light = light
    }
    excute(): void {
        this.light.on();
        this.light.nowStatus();
    }
    unexecute(): void {
        this.light.undo();
        this.light.nowStatus();
    }
}