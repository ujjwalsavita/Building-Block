// create ->>
// access ->>dot vs []  || mutalbe or immutable 


// 1. Literals
obj = {
    name : "Coding Seekho",
    age : 24,
    address :{
        city:"Delhi",
        pincode :"222222"
    }
}
obj.age = 29
// console.log(obj.age);
// console.log(obj["age"]);

// console.log(typeof obj.age);
// console.log(obj.age);

// 2. Object Constructor

obj2 = new Object();
obj2.name = "Ujjwal"

// console.log(typeof obj2)
// console.log(obj2.name)

// 3. fuctions
function Students(name, a){
    this.name = name;
    this.age = a;
    // console.log(this.name);
    // console.log(this.a);
}

st = new Students("Chintu", 1000);
st2 = new Students("Chinti", 11000)
// console.log(typeof st);
// console.log(st);
// console.log(typeof st2);
// console.log(st2);

const obj3 = {
    name : "Push ji",
    age : 100,
    address:{
        city:"Lucknow",
        pincode : "100"
    }
}
// console.log(obj3);
// delete obj3.name;
// console.log(obj3);

// let [z,x,...c] = [1,2,23,43,4,5,1];
// console.log(z)
// console.log(x)
// console.log(c)

let {age:newAge, name = "Subhas",x = 10} = obj3;
// console.log(name);
// console.log(newAge);
// console.log(x);



// console.log({} == {})












