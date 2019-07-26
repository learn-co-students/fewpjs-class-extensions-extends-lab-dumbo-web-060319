// Your code here

class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((a, b) => a + b);
  }
}

class Triangle extends Polygon {
  //  const s1, s2, s3 = this.sides[0], this.sides[1], this.sides[2]
  get isValid() {
    if (
      this.countSides === 3 &&
      this.sides[0] + this.sides[1] > this.sides[2] &&
      this.sides[0] + this.sides[2] > this.sides[1] &&
      this.sides[2] + this.sides[1] > this.sides[0]
    )
      return true;

    return false;
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides === 4 && this.sides[0] === this.perimeter / 4)
      return true;

    return false;
  }

  get area() {
    return this.sides[0] * this.sides[1];
  }
}
