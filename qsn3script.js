class Person{
    constructor(name,dob,age,address,email,phonenumber,gender,job,salary,qualification,maritalstatus){
    this.name=name;
    this.dob=dob;
    this.age=age;
    this.address=address;
    this.email=email;
    this.phonenumber=phonenumber;
    this.gender=gender;
    this.job=job;
    this.salary=salary;
    this.qualification=qualification;
    this.maritalstatus=maritalstatus;
}
}
var p1=new Person("surya","16-2-1998","22","kundrathur chennai","surya@gmail.com","9123456789","male","frontend developer","10Lakhs","B.Sc","single");
console.log(p1);