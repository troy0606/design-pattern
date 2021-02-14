import { Icommand } from "./Icommand";
import { LightDownCommand } from "./lightDownCommand";
import { LightOffCommand } from "./lightOffCommand";
import { LightOnCommand } from "./lightOnCommand";
import { LightUpCommand } from "./lightUpCommand";
import { Receiver } from "./receiver";


class Invoker {
  constructor(
    private on: Icommand,
    private off: Icommand,
    private up: Icommand,
    private down: Icommand
  ) {}

  public clickOn(): void {
    this.on.excute();
  }
  public clickOff(): void {
    this.off.excute();
  }
  public clickUp(): void {
    this.up.excute();
  }
  public clickDown(): void {
    this.down.excute();
  }
  public clickUndo(): void {
    this.on.unexecute();
  }
}

const light = new Receiver();
const lightInvoker = new Invoker(
  new LightOnCommand(light),
  new LightOffCommand(light),
  new LightUpCommand(light),
  new LightDownCommand(light)
);

lightInvoker.clickOn()
lightInvoker.clickOff()
lightInvoker.clickUndo()
