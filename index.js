class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((accum, currVal) => accum + currVal)
    }
}

class Triangle extends Polygon {
    get isValid() {
        let sum1 = this.sides[0] + this.sides[1] 
        let sum2 = this.sides[1] + this.sides[2]
        for (let i = 0; i < this.sides.length; i++) {
            const side = this.sides[i];
            if (sum1 < side || sum2 < side) {
                return false;
            }
        }
        return true;
    }
}

class Square extends Polygon  {
    get isValid() {
        const sideToCheck = this.sides[0]
        for (let i = 1; i < this.sides.length; i++) {
            const side = this.sides[i];
            if (side !== sideToCheck) {
                return false;
            }
        }
        return true;
    }

    get area() {
        if (this.isValid) {
            return this.sides[0]**2
        }
    }
}