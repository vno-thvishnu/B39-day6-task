class Circle{
    constructor(radius,colour){
    this.radius=radius;
    this.colour=colour;
}
 getname(){
    return this.radius;
 }
 }
var r1=new Circle("1.0","red");
console.log(r1.getname());



 class Circle{
     constructor(radius,colour){
     this.radius=radius;
     this.colour=colour;
 }
set changeradius(modifiedradius){
    this.radius=modifiedradius;
}
}
 var r1=new Circle("1.0","red");
 r1.changeradius="Void";
  console.log(r1.radius);




 class Circle{
     constructor(radius,colour){
    this.radius=radius;
    this.colour=colour;
 }
 getname(){
    return this.colour;
 }
 }
 var r1=new Circle("1.0","red");
 console.log(r1.getname());




class Circle{
    constructor(radius,colour){
    this.radius=radius;
    this.colour=colour;
}
 set changecolour(modifiedcolour){
    this.colour=modifiedcolour;
 }
 }
var r1=new Circle("1.0","red");
r1.changecolour="black";
 console.log(r1.colour);



class Circle{
    constructor(radius,colour){
    this.radius=radius;
    this.colour=colour;
 }
 }
 var r1=new Circle("1.0","red");
 var r2=r1.radius.toString();
 console.log(r2);
 console.log(typeof(r2));






class Circle{
     constructor(radius,colour){
     this.radius=radius;
     this.colour=colour;
 }
getname(){
     return Math.PI*this.radius*this.radius;
 }
 }
 var r1=new Circle("4.0","red");
 console.log(r1.getname());



class Circle{
    constructor(radius,colour){
    this.radius=radius;
    this.colour=colour;
}
getname(){
    return 2*Math.PI*this.radius;
}
}
var r1=new Circle("4.0","red");
console.log(r1.getname());