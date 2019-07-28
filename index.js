// Your code here

class Polygon {
    constructor(array){
        this.side=array
    }

get countSides(){
   return this.side.length
}

get perimeter(){
    return this.side.reduce((a,b) => a + b, 0)
}
}

class Triangle extends Polygon{
    get isValid(){
        if (this.side[0]+this.side[1]<this.side[2]){
            return false
        } else if(this.side[0]+this.side[2]<this.side[1]){
            return false;
        } else if(this.side[1]+this.side[2]<this.side[0]){
            return false;
        }else{
            return true;}
    }
}


class Square extends Polygon{
    get isValid(){
        if (this.side[0]== this.side[1] && this.side[0]==this.side[2] && this.side[0] == this.side[3]){
            return true 
        }else{
            return false
        }
    }

    get area(){
        return this.side[0]**2
    }
}