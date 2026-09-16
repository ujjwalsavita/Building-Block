obj = {
    name : "Coding Seekho",
    age : 100,
    contact : 1010100100,
    address:{
        city: "Lucknow",
        pin : 12121
    }
}

// loop over the object
// for(let item of Object.entries(obj)){
//     console.log(item[0])
//     console.log(item[1])
// }

// for(let x of Object.keys(obj)){
//     console.log(obj[x]);
// }

// console.log(obj.name);
// console.log(obj["name"]);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));


// for(let x in obj){
//     console.log(x);
//     console.log(obj[x]);
// }

// Object.keys(obj); 
// Object.values(obj);
// Object.entries(obj);


// copy 
// METHOD 1*************
// obj2 = {...obj}
// obj2.name = "Coding Seekho sab ka sathi"
// obj2.age = 1000;
// obj2.address = {cit : "pune",pincode : 12334566}

// METHOD 2 **********
// obj2 = Object.assign({}, obj);
// obj2.name = "Coding Seekho sab ka sathi"
// obj2.age = 1000;
// obj2.address.city = "Pune";

//METHOD 3
// obj2 = {...Object.entries(obj)}
// obj2['3'][1].city = "pune";
// console.log(obj)
// console.log(obj2)



// deep copy..

// method 1.
// obj2 = structuredClone(obj);
// obj2.name = "Coding Seekho sab ka sathi"
// obj2.age = 1000;
// obj2.address.city = "Pune";


//method 2. 
arr = [1,2,3,4,4]
// console.log(JSON.stringify(arr));
// obj2 = new Object(JSON.stringify(obj))
obj2 = JSON.parse(JSON.stringify(obj))
obj2.age = 1000;
// obj2.address.city = "Pune";
// console.log(obj);
// console.log(obj2);
// console.log(typeof obj2);

//

[x,y,...z] = [...obj]
console.log(x)
console.log(y)
console.log(z)



// method 3. fuction ke sath hotaaaa......
