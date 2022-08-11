import IShapeArea from "./IShapeArea";

export default class Circle implements IShapeArea {
  static readonly Radius = 3.14;
  protected width: number;
  constructor(width: number) {
    this.width = width;
  }
  getArea(): number {
    return Math.pow((this.width/2), 2) * Circle.Radius;
  }
}