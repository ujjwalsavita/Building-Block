
console.log("hello 1\n"); /// call stack 1

setTimeout(()=>{
    console.log("i am inside set time out\n")
},0); // last me becahre ye vali baat chal rahi hogi


function fun(name){
    console.log("I am inside fun function\n")
    return `hello ${name} sir, test paper ka thoda hint de dijiye\n`
}

for(var i = 0 ;i < 4 ;i ++){
    console.log("i am inside lop time out>>>>>>>>", i);
    setTimeout(()=>{
        console.log("\n i am inside lop time out<<<<<<<<<", i);
    },2000); // last me becahre ye vali baat chal rahi hogi

}

function call(name){
    console.log("\nI am inside call function")

    setTimeout(()=>{
        console.log("\ni am inside set time out of the call function");
    },1000); // last me becahre ye vali baat chal rahi hogi
    
    let message = fun(name);

    console.log(message);
}

call("Ujjwal"); // call stack 2


console.log(" \n areee sir kuch bata dijiye") // call stack 3




