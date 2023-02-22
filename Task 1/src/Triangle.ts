import { Point } from "./Point";
import { Shape } from "./Shape";

export class Triangle extends Shape {
  constructor(a: Point, b: Point, c: Point) {
    super([a, b, c]);
  }

  toString() {
    let str = `Triangle[`;

    for (let i = 0; i < this.points.length; i++) {
      str += `v${i + 1}=${this.points[i].toString()}`;
      if (i < this.points.length - 1) {
        str += ",";
      }
    }
    return `${str}]`;
  }

  getType() {
    if (
      this.points[0].distance(this.points[1]) === this.points[1].distance(this.points[2]) &&
      this.points[1].distance(this.points[2]) === this.points[2].distance(this.points[0])
    ) {
      return "equilateral triangle";
    }

    if (
      this.points[0].distance(this.points[1]) === this.points[0].distance(this.points[2]) ||
      this.points[0].distance(this.points[1]) === this.points[1].distance(this.points[2]) ||
      this.points[1].distance(this.points[2]) === this.points[0].distance(this.points[2])
    ) {
      return "isosceles triangle";
    }

    return "scalene triangle";
  }
}
