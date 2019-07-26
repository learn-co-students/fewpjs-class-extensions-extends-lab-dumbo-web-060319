class Polygon {

  constructor(array) {
    this.array = array
  }

  get countSides() {
    return this.array.length
  }

  get perimeter() {
    let number = 0;
    this.array.forEach(integer => number += integer)
    return number
  }

}

class Triangle extends Polygon {

  get isValid() {
    if (this.countSides === 3 && 
      this.array[0] + this.array[1] > this.array[2]  &&
      this.array[0] + this.array[2] > this.array[1] &&
      this.array[1] + this.array[2] > this.array[0]
      )
     return true
   else 
     return false
   end
  }

}

class Square extends Polygon {

  get isValid() {
    if (this.countSides === 4 && this.array[0] === this.perimeter / 4)
      return true;

     return false;
  }

   get area() {
    return this.array[0] * this.array[1];
  }

}