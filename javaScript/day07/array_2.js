/*  1 sep - 2026
update
access - searching
sorting
slice vs splice

destructuring
spread
flattern :: imp
*/


// let arr = [1,2,6,5,4,8,100, 2, 6] ;
// console.log(arr);

// arr[0] = 1000
// console.log(arr);

// all those values whihc are put in arr -- >
/* for(let i = 0 ; i < arr.length ; i++){
        arr[i] =arr[i] ** 2 ;
    }
    
    console.log(arr);
*/   

// topic 1  ::  Searching  ::  indexof() /  lastIndexOf() / includes()

// console.log(arr.indexOf(6)); // if the val is present it will return index of that elements
// console.log(arr.lastIndexOf(6)) //  same as above ones
// console.log(arr.includes(6)) // it will return ture or false


//Topic 3 : Sorting

// 1, 2,3,6,7,9 = yes  Ascending
// 1,1,2,3,3,4,5 == yes non decreasing

// 9, 7, 5, 3, 2, -1 == yes descending
// 9 , 7, 7, 6 , 5, 1 == yes non increasing


// let brr =[1, 2,3,6,7,9,10, 100, 12,6, 5]
// let brr = ["mango", "apple", "banana", 'papaya','aa'];

// console.log(brr);
// brr.sort();
// brr.sort((a,b)=> b-a)

// console.log(brr);




// topic ::   slice vs splice
// slice ::  slice(st, end) // st is included & end is excluded


// let crr = [1,2,3,4,5,6,7,8,10,0,2];

// let drr = crr.slice()
// let drr = crr.slice(2);
// let drr = crr.slice(2,6);
// drr[0]= 100
// console.log(drr);
// console.log(crr);

// splice :: it is work over the original array or ( it will mutate oringal array in place)
// splice(stIdx, deleteCount, items, items items, items)

// let err = [86,6,3,4,6,8,4,2,22];

// err.splice(3,0,"mukesh ji", 'bhupendar ji', "suraj ji");
// console.log(err);


// destucturing
// let frr=[1,2,3,5,6,7,8,8];
// let[x,...y] = frr;
// console.log(x)
// console.log(y)

// console.log(...frr)


let grr = [1,2,3,4,7,6,[2,3,[2,6,4,5,6,7],5,6], [1,223,4,45]]
console.log(grr);
console.log(...grr.flat(Infinity))

