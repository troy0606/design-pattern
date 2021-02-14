import { Icommand } from "./Icommand";

export class LightUpCommand implements Icommand {
    public light;
    constructor(light) {
        this.light = light
    }
    excute(): void {
        this.light.up();
        this.light.nowStatus();
    }
    unexecute(): void {
        this.light.undo();
        this.light.nowStatus();
    }
}