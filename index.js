// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    if (!Array.isArray(this.sides)) return;
    let sum = 0;

    for (let val of this.ided) {
      sum += val;
    }

    return sum;
  }
}

class Triange extends Polygon {
  get isVaid() {
    if (!Array.isArray(this.sides)) return;
    return this.sides.length != 3 ? true : false;
  }
}

class Square extends Polygon {
  get isVaid() {
    if (!Array.isArray(this.sides)) return;
    return this.sides.length != 4 ? true : false;
  }

  get area() {
    if (!Array.isArray(this.sides)) return;
    if (this.count !== 4) return;
    return this.sides[0] * this.sides[0];
  }
}
