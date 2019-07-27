// Your code here
class Polygon {

    constructor(array) {
        this.array = array
    }

    get countSides(){
       let counter = 0;
       for (let i=0; i < this.array.length; i++){
           this.array[i];
           counter += 1
       }
      return counter
      
    }

    get perimeter(){
        let p = 0;
        for (let i=0; i<this.array.length; i++){
            p  += this.array[i] 
         }
        return p 
    }
}

class Triangle extends Polygon {

    get isValid(){
        let side1 = this.array[0];
        let side2 = this.array[1];
        let side3 = this.array[2];
        if ((side1 + side2 > side3) && (side2 + side3 > side1) && (side3+side1 > side2)) {
            return true;
        } else {
            return false;
        }
    }
}

class Square extends Polygon {

    get isValid(){
       if (this.array[0] * 4 === this.perimeter){
           return true;
       } else {
           return false;
       }
    }

    get area(){
        let side1 = this.array[0];
        let side2 = this.array[1];
       return side1 * side2;
    }
}