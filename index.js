class Polygon {
  constructor(sidesArray) {
    this.sidesArray = sidesArray
  }

  get countSides() {
    return this.sidesArray.length
  }

  get perimeter() {
    return this.sidesArray.reduce((a, b) => a + b, 0)
  }

}

class Triangle extends Polygon {
  get isValid() {
    if (this.sidesArray.length !== 3) return;
    return (
      (this.sidesArray[0] + this.sidesArray[1] > this.sidesArray[2]) &&
      (this.sidesArray[0] + this.sidesArray[2] > this.sidesArray[1]) &&
      (this.sidesArray[1] + this.sidesArray[2] > this.sidesArray[0])
    )
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.sidesArray.length !== 4) return;
    return (
      (this.sidesArray[0] === this.sidesArray[1]) &&
      (this.sidesArray[0] === this.sidesArray[2]) &&
      (this.sidesArray[0] === this.sidesArray[3])
    )
  }

  get area() {
    if (!this.isValid) return;
    return Math.pow(this.sidesArray[0], 2)
  }
}
