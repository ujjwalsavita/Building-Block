// obj = {
//     "name": "Coding seekho",

//     greet:function(){
//         console.log(`hello ${this.name}`);
//     }
// }


// // obj.greet() # this will direct to obj object

// // let x = obj.greet;
// // x() // from here undefine value of name is primted


// // constructor function
// function coding(x, y){
//     this.name = x;
//     this.age = y;
// }

// let obj1 = new coding("pune", 2);
// console.log(obj1.name);
// console.log(obj1.age);

// let obj2 = new coding("Lucknow", 5);
// console.log(obj2.name)
// console.log(obj2.age)



// // factory function ::
// function fun(name, age){
//     return {
//         name,
//         age,
//         greet:function(){
//             console.log(`hello ${this.name}`);
//         }
//     }
// }
// let obj3 = fun("pune", 4);
// console.log(obj3.name)
// console.log(obj3.age)
// obj3.greet();

// let obj4 = fun("Lucknow", 100);
// console.log(obj4.name)
// console.log(obj4.age)
// obj4.greet();

// console.log(obj4.toString(),"***");

// obj4.hello()



// OOPs :: way of programming , in which every keeps around the objects

class student{

    // it is beautiful function, it is called when the object is created --
    // it used to initilized the variable of the objects

    constructor(name, age){
        // properties
        this.name = name;
        this.age = age;
    }

    //method
    greet(){
        console.log(`hello ${this.name}`);
        console.log(`hello ${this.age}`);
    }
}
st1 = new student("pune", 100);
st2 = new student("Lucknow", 1000);
// console.log("pune" === "pune") // true
// console.log(st1.name === st2.name) // false
// console.log(st1)
// console.log(st1.greet === st2.greet) // true

function functionn(){

    function greet(){
        console.log("yes");
    }

    return greet;
}

a1 = functionn();
a2 = functionn();

// console.log(a1.greet === a2.greet)

// console.log();


// Inheritance :: *************************************************************************
class Animal{
    constructor(n){
        this.name = n
    } 

    greet(){
        // console.log(this.name);
        return this.name
    }
}

ani = new Animal("elephat");

class Breed  extends Animal{
    constructor(name){
        // this.name = name;
        super(name);
    }

    cost(){
        console.log("bahut mahega");
    }
}

// d1 = new Dog();
// d1.name = "tommy";
// d1 = new Dog("Tommy")
// console.log(d1.greet())

class Dog extends Breed{
    eat(){
        console.log("eat a roti in day");
    }
}

// d1 = new Dog();
// d1.name ="German"
// console.log(d1.greet());


// Encaptulation ::: *******************************************************
// function accountSBI(amount){
//     let balance = amount;

//     return {
//         depostite : function(){

//         },
//         withdraw : function(){

//         }
//     }
// }

// ac1 = accountSBI(6);
// console.log(ac1.balance)


class coding{
    #balance = 0;

    deposite(amount){
        this.#balance += amount;
    }
}
ap = new coding();
ap.deposite(1)
// console.log(ap.balance)


// Abstraction*****************************************************************************
class googlepay{
    pay(){


        this.#receiverValidation();
        this.#detductFromMyAccount();
    }

    #receiverValidation(){

    }

    #detductFromMyAccount(){

    }

    sendToUser(){

    }


    updateTransactionStatus(){

    }
}

// polymorphism

class a{
    greet(){
        console.log("hello ji");
    }

    // add(a,b){
    //     let sum = a + b;
    //     return sum;
    //     // return a+b;
    // }
    add(...a){

        let sum = 0;
        for(let x of a){
            sum += x;
        }
        return sum;
        // let sum = a+ b+ c;
        // return sum;
    }
}

class b extends a{
    greet(){  // method overriding
        console.log("hello uncle ko,  namaste kijiye,");;
    }
}
b1 = new b();
b1.greet();
console.log(b1.add(2,5,6,7,8,9,6,7,8,9));



