import IShapeArea from "./IShapeArea";

export default class Traingle implements IShapeArea {
  protected width: number;
  protected height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;

  }
  getArea(): number {
    return this.width * this.height / 2
  }
}