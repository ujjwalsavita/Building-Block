// array is the collection of elements in ordered formate


// creation*******************************************************************8
// METHOD 1
let arr = [1,2,3,4,5,6,7,8];  // array literals

// console.log(arr[1]);
// console.log(typeof arr)

// MEHTOD 2
let brr = new Array(5);
// console.log(brr.length)

brr.length = 7;
// console.log(brr.length)

// console.log(typeof brr)
// console.log(brr[6]);

let crr = new Array(1,2,3,3,4,5,6);
// console.log(crr.length)

// METHOD 3

let drr = Array.from(crr)
// console.log(drr.length)





// Accessing phase 2 ************************************************************
// console.log(Boolean([])); // truthy  --> ture
// console.log([] == []); //  false  ::  because in js Comparison of object is done on the basis of the refrence
let err = drr;
// console.log(err == drr); //

// refrence :: -- > 
// stack  refrecne
// heap :: actual allocation 

// method 1 :: index accessing
// console.log(err[0])
// console.log(err[1])
// console.log(err[2])
// console.log(err[-1]) // undefine  --> -1 index is not exist
// console.log(err.at(-1)) // backward indexing.....

// method 2 :: with loops

// console.log(err); //  this give return array object 

// for(let i = 4;i < err.length ; i++){
//     console.log(err[i]); // each elements which is present the index
// }

// console.log()
// for(let elemnt of err){
//     console.log(elemnt);
// }

// Mutablity :: insert , update delete  ***********************************************

// console.log(err);

// INSERTION / DELETION :: PUSH , POP :: BOTH WILL PERFROM ACTION TO THE ELEMENT TO THE END OF THE ARRAY
// err.push("hello");
// console.log(err);
// err.push("Good morning");
// console.log(err);

// err.pop()
// console.log(err);
// console.log(err.pop()); // POP METHOD WILL DELETE LAST ELEMENT AND RETURN IT.
// console.log(err);

// INSERTION / DELETION :: FROM THE START OF THE ARRAY

// shift () :  delete  from the start // delete from the start and return it
// unshift() ::  add at the start
// err.shift();
// console.log(err.shift()); 

// err.unshift(1);
// console.log(err);

// let frr = [];
// let frr = new Array();

// frr.unshift(1,2,3,4,5,6);
// console.log(frr);

// empty vs undefine
// frr.length = 10;
// console.log(frr);
// console.log(frr[6]);








