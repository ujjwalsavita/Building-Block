// let name = "xyz"
// let st = "Kuch bhi name";
// let st = 'Kuch bhi';
// let st = `kuch bi ${name}`

// let arr =["apple", "banana", 'orange', "papaya"];
// arr[0].charAt(0).toUpperCase();
// console.log(arr);



// Accessing 

// let st = "CoDing Seekho";
// console.log(st[0])
// console.log(st[1])
// console.log(st[2])
// console.log(st[3])
// console.log(st[4])
// console.log(st[5])
// console.log(st[6])
// console.log(st[7])

// for(let ch of st){
//     console.log(ch);
// }

// for(let i = 0 ;i < st.length; i++){
//     // console.log(st.charAt(i));
//     console.log(st.charAt(i));
// }


// Immutable ::  we can't the change the inplace , 
// it will always assing a new memory space for the updated value

// Searching

let st = "CoDing Seekho Seekho Seekho";
// console.log(st.includes("Seekho"))
// console.log(st.indexOf("Seekho"))
// console.log(st.lastIndexOf("Seekho"))
// console.log(st.at(-1))
// console.log(st.startsWith("H"))
// console.log(st.endsWith("Seekho"))


// slicing 
let newSt = st.slice(2,15);
// console.log(newSt)


let name = "Coding Seekho"
let newname = "Coding Seekho"

// console.log(name == newname)
// console.log('5' > '55') // false :: we will always compare unicode value
// console.log('apple' < 'banana') // true


let x = '5' + 1
// console.log(typeof x)

// repeate

// *
// **
// ***
// ****
// *****
    // console.log("*".repeat(4))
    for(let i = 1 ; i < 6 ;i++){
        // console.log("* ".repeat(i));
    }

// toUpperCase() || toLowerCase() :: they don't change to fthe original one 
{
    let name = "Coding Seekho";
    // console.log(name);
    name = name.toLowerCase();
    // console.log(name);
    name = name.toUpperCase();
    // console.log(name);
}


// trim ->>

{
    let name = "    Coding Seekho    ";
    // console.log(name.trim().repeat(2));
    // name = name.trimEnd();
    name = name.trimStart();
    // console.log(name.repeat(2));
}

// replace ->>
{
    let name = "Coding Seekho";
    // console.log(name.replace("Coding", "").trim());
    // console.log(name.replaceAll("Coding", "").trim());


    // console.log(name);
}

// console.log(Boolean(""))
// console.log(Boolean([]))





// slice || substring , substr ->> 3
{
    let name = "Coding Seekho";
    // console.log(name.slice(1,7))
    // console.log(name.substring(1,7))

    // puri reverse
    // console.log(name.split("").reverse().join(""))


    // each word reverse
    // split
    let arr = name.split(" "); // ["Coding", "Seekho"]
    for(let i = 0 ; i < arr.length ;i++){
        arr[i] = arr[i].split("").reverse().join("");
    }

    for(let i = 0 ;i < arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
    }



    name = arr.join(" ")
    // gnidoC ohkeeS
    // Gnidoc Ohkees
    console.log(name);
    

    // stating charcter of each words should be capital
}
// concat :: addition of two string
// match  :: 
{
    let first = "Coding";
    let last ="Seekho";

    first = first.concat(" ",last);
    console.log(first.match("Coding"));

}

// padStart :: add padding
    let age = '26';
    console.log(age.padStart(5))

// number to string
// sting to number
{
    let a =55.5;
    let b = String(a);
    // console.log(b);
    // console.log(typeof b);
    
    
    let c = parseInt("542a", 10)
    console.log(typeof c);
    console.log(c);

     



}

















