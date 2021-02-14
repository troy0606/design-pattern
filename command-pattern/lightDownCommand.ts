import { Icommand } from "./Icommand";

export class LightDownCommand implements Icommand {
    public light;
    constructor(light) {
        this.light = light
    }
    excute(): void {
        this.light.down();
        this.light.nowStatus();
    }
    unexecute(): void {
        this.light.undo();
        this.light.nowStatus();
    }
}