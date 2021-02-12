import { IFlyBehavior } from "./IFlyBehavior";

export class JetFly implements IFlyBehavior {
  fly(): string {
    return "pui pui fly";
  }
}
