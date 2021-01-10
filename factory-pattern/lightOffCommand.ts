import { Icommand } from "./Icommand";

export class LightOffCommand implements Icommand {
    public light;
    constructor(light) {
        this.light = light
    }
    excute(): void {
        this.light.off();
        this.light.nowStatus();
    }
    unexecute(): void {
        this.light.undo();
        this.light.nowStatus();
    }
}