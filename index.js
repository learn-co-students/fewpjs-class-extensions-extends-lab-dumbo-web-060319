// Your code here

class Polygon {
  constructor(sidesArray) {
    this.sidesArray = sidesArray
  }

  get countSides() {
    return this.sidesArray.length
  }

  get perimeter() {
    let sum = 0;
    this.sidesArray.forEach(side => {
      sum += side
    });
    return sum;
  }

}

class Triangle extends Polygon {

  get isValid() {
    if (!Array.isArray(this.sidesArray)) return;
    if (this.countSides !== 3) return;
    let threeSides = (this.countSides == 3)
    let isTriangle =
      (this.sidesArray[0] + this.sidesArray[1] > this.sidesArray[2]) ||
      (this.sidesArray[0] + this.sidesArray[2] > this.sidesArray[1]) ||
      (this.sidesArray[1] + this.sidesArray[0] > this.sidesArray[2]) ||
      (this.sidesArray[1] + this.sidesArray[2] > this.sidesArray[0]) ||
      (this.sidesArray[2] + this.sidesArray[0] > this.sidesArray[1]) ||
      (this.sidesArray[2] + this.sidesArray[1] > this.sidesArray[0])
    return (threeSides && isTriangle)
  }
}

class Square extends Polygon {

  get isValid() {
    if (!Array.isArray(this.sidesArray)) return;
    if (this.countSides !== 4) return;
    let fourSides = (this.countSides == 4)
    let isSquare = (this.sidesArray[0] == this.sidesArray[1] == this.sidesArray[2] == this.sidesArray[3])
    return (fourSides && isSquare)
  }

  get area() {
    return (this.sidesArray[0] * this.sidesArray[0])
  }
}

