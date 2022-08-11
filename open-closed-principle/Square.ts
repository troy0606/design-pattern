import IShapeArea from "./IShapeArea";

export default class Square implements IShapeArea {
  protected width: number;
  constructor(width: number) {
    this.width = width;
  }
  getArea(): number {
    return Math.pow(this.width, 2);
  }
}