export class Point {
  public x: number;
  public y: number;

  constructor(x?: number, y?: number) {
    this.x = x ?? 0;
    this.y = y ?? 0;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }

  distance(other?: Point | number, y?: number) {
    if (other === undefined && y === undefined) {
      other = new Point(0, 0);
    }

    if (other instanceof Point) {
      return Number(Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2)).toFixed(1));
    }

    if (typeof other === "number") {
      let otherPoint: Point = new Point(other, y);
      return Number(Math.sqrt(Math.pow(this.x - otherPoint.x, 2) + Math.pow(this.y - otherPoint.y, 2)).toFixed(1));
    }

    return 0;
  }
}
