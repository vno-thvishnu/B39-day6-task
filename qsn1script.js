class Movie{
    constructor(title,studio,rating){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
}
}
var r1=new Movie("spider man no way home","marvel","9/10");
console.log(r1);

// d)
class Movie{
    constructor(title,studio,rating){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
}
}
var r1=new Movie("Casino Royal","Eon Productions","PG­13");
console.log(r1);

// b)
class Movie{
    constructor(title,studio,rating){
    this.title=title;
    this.studio=studio;
    this.rating="PG";
    this.rating=rating;
}
}
var r1=new Movie("Casino Royal","Eon Productions");
console.log(r1);
var r2=new Movie("john wick","WB","PG13");
console.log(r2);
// c)
class Movie{
    constructor(title,studio,rating){
    this.title=title;
    this.studio=studio;
    this.rating="PG";
    this.rating=rating;
}
getname(){
    return this.title;
}
}
var r1=new Movie("Casino Royal","Eon Productions");
var r2=new Movie("john wick","WB","PG13");
var r3=new Movie("krish","WB")
var r4=new Movie("avengers","marvel","PG13");
var r5=new Movie("spiderman","marvel");
console.log(r1.getname()+" "+r3.getname());