import Circle from "./Circle";
import IShapeArea from "./IShapeArea";
import Square from "./Square";
import Triangle from "./Triangle";

export default class AreaCalculator {
  protected Shapes: Array<IShapeArea>;
  constructor() {
    this.Shapes = [];
  }

  addShapes(shape: IShapeArea): void {
    this.Shapes.push(shape);
  }

  getAllShapesArea(): number {
    return this.Shapes.reduce((sum, shape) => sum + shape.getArea(), 0);
  }
}

const areaCalculator = new AreaCalculator();

const squareA = new Square(100);
const triangleA = new Triangle(20,40);
const circleA = new Circle(30);
const CircleB = new Circle(25);

areaCalculator.addShapes(squareA);
areaCalculator.addShapes(triangleA);
areaCalculator.addShapes(circleA);
areaCalculator.addShapes(CircleB);

console.log(areaCalculator.getAllShapesArea());