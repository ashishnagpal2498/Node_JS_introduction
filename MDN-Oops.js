//Basic Object in javascript
let ob = { };
let person = {
    name :{
        first: "John",
        last :"wick"
    },
    age :32,
    gender: 'male',
    isAdult : function () {
        return age>18;
    }
};
console.log(person.name)
console.log(person['name']['first'])

//Constructor Functions - used to return objects -

//Ways to create an object -
//Constructor functions and returning the object
function CreateP(name,age) {
    let ob = {
        name:name,
        age: age
    }
    return ob;
}

//****************************
//Constructor functions and new keyword

function Cperson(name,age) {
    this.name = name;
    this.age = age;
    function ab() {
        return 1;
    }
}
let a = new Cperson("ac",32);
console.log(a.__proto__);
// console.log(a.valueOf());
Cperson.prototype.myfun = function () {
    return "Hell0";
}
console.log(Object.getPrototypeOf(a))

console.log(Object.prototype)
//**************************

//Prototype property of Javascript

//Prototype Inheritance
function Person(name,age,gender) {
    this.name = name;
    this.age = age
    this.gender = gender;
    this.greeting = function () {
        return 10;
    }
}

function Student(name,age,g) {
    Person.call(this,name,age,g);
    this.greeting = function () {
        return 20;
    }
}

let std = new Student("Abc",21,'M');
console.log(std)
console.log(Object.getOwnPropertyNames(Student.prototype));