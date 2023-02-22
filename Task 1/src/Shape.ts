import { Point } from "./Point";

export abstract class Shape {
  protected color: String;
  protected filled: boolean;
  public points: Point[];

  constructor(points: Point[], color?: String, filled?: boolean) {
    if (points.length < 3) {
      throw new Error("Require at least 3 points");
    }

    this.color = color ?? "green";
    this.filled = filled ?? true;
    this.points = points;
  }

  toString() {
    let coordinates = "";

    for (let i = 0; i < this.points.length; i++) {
      coordinates += `${this.points[i].toString()}`;
      if (i < this.points.length - 1) {
        coordinates += ", ";
      }
    }

    return `A Shape with color of ${this.color} and ${this.filled ? "filled" : "not filled"}. Points: ${coordinates}.`;
  }

  getPerimeter() {
    let sum = 0;

    for (let i = 0; i < this.points.length; i++) {
      if (i === this.points.length - 1) {
        sum += this.points[i].distance(this.points[0]);
      } else {
        sum += this.points[i].distance(this.points[i + 1]);
      }
    }

    return sum;
  }

  abstract getType(): string;
}
