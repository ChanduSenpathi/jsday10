// class using constructor
// eg.1:-

class Person {
    constructor(name){
      this.setName(name)
    }
    getName(){
       return this.name;
    }
    setName(newName)
    {
      return this.name=newName;
    }
 }
 let obj=new Person("neosoft");
 console.log(obj.getName());
 obj.setName("technologies");
 console.log(obj.getName());

// eg.2:-

class Car 
{
    constructor(vechicle_name){
        this.speed=80;
        this.name=vechicle_name;
    }
    acc(){
        this.speed+=200;
    }
    checkspeed(){
        console.log(`Vechicle Name is ${this.name} and The speed is ${this.speed}`)
    }
}
let obj=new Car("Hundai");
obj.checkspeed();
obj.acc();
obj.checkspeed();

// eg.3:-

class Bike
{
    constructor(name,normal_speed){
        this.name=name;
        this.no_speed=normal_speed;
    }
    increasingSpeed(in_speed){
        this.no_speed+=in_speed
        console.log(this.no_speed)
    }
    decreasingSpeed(de_speed){
        this.no_speed+=de_speed
        console.log(this.no_speed)
    }
    horn(){
        console.log("keeeeeeeeeeee")
    }
    applyingBrake(){
        this.no_speed=0
        console.log(this.no_speed)
    }
}
let obj=new Bike("Royal Enfield",50,30,80)
obj.increasingSpeed(50)
obj.horn()
obj.decreasingSpeed(30)
obj.applyingBrake()


// class using set and get keywords

class Person {
    constructor(name,age){
      this.name=name;
      this.age=age
    }
    get name(){
        return this.name;
    }
    set name(an_name){
        return this.name=an_name
    }
    get age(){
        return this.age
    }
   
 }
 let obj=new Person("Chandu",23);
 console.log(obj.name);
 obj.name="Senapathi"
 console.log(obj.name);
 console.log(obj.age)


//  class using static method

class Employee 
{
    constructor(){
        this.co_name="Neosfot Technologies";
    }
    static emp_id=94749;
    Jhon(){
        console.log(Employee.counter());
    }
    static counter(){
        return Employee.count;
    }
}
let obj=new Employee;
obj.Jhon();