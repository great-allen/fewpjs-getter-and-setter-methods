// Add your Circle class here
//this.diameter = this.radius * 2;
      //this.circumference= Math.PI * this.diameter;
      //this.area= Math.PI * (this.radius*this.radius);
const pi =Math.PI;
class Circle{
    constructor(radius){
        this.radius = radius;
    }
    get diameter(){
      return (this.radius*2);
    }
    set diameter(diameter){
        this.radius = diameter / 2;
    }
    get circumference(){
        return (pi*this.radius*2);
    }
    set circumference(circumference){
        this.radius =circumference /(pi*2);
    }
    get area(){
        return pi*(this.radius*this.radius);
    }
    set area(area){
        this.radius = Math.sqrt(area/pi);
    }
}