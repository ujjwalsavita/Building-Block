// funName();
function funName(){
    console.log("I am inside normal function")
} 

// function expression
let funName2 = function(){
    console.log("I am inside anonymous");
}
// funName2();


let funName3 = ()=>{
    console.log("I am inside arrow fucntion");
}
// funName3();

function operation(a,b){
    return {add :a+b,sub: a-b,mult: a*b};
}

let {add:Addition, sub ,mult = 1} = operation(5,3);
// console.log(Addition);
// console.log(sub);
// console.log(mult);

function add(...lis){
    let sum = 0;
    for(let x of lis) sum += x;
    return sum;

}

// console.log(add(2));
// console.log(add(2,3,4,5,6,6));
// console.log(add(2,1,4,5,6,6,7,8,8,8,9,9,99,10));

function fun(){
    return ()=>{"hello bhai"};
}

// let name = "Ravi"
// arr  = fun()
// console.log(typeof arr);
// console.log(arr)

function papa_ji(child){
    console.log("yes");
    child();
    console.log("no")
}

// let chillar = ()=>{console.log("i am child")}
// papa_ji(chillar)



let obj = {
    name : "Push ji",
    greet : function(name){
        return `hello goodmorning ${this.name = name}`;
    }
}

// console.log(obj.greet("Kallu bhiaya"))
// console.log(obj.name);









