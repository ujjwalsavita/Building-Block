let arr = [ 1,2,24,5,6,7,88,9,9,1,120,23,30,90,0];

// HOF 

// array obje se hi print kar de

// for (let i = 0 ; i < arr.length ; i++){

// }

// for(let x of arr) console.log(x)

// name()
// function name(){} 
// let a = function(){}

// arr.forEach((el)=>console.log(el));


// let a = arr.forEach(double)
// console.log(a);

// function double(el){
//     console.log(el*el);
// }

// let a = arr.map((el)=> el*el);
// console.log(a);
// console.log(arr);

// let a = arr.filter((el)=> el % 2 === 0)
// console.log(a);



// arr.reduce(callback , initial)

let a = arr.reduce((acc, el)=>acc = acc + el , 1000);
console.log(a);
