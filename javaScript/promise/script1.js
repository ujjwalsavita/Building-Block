const pr = new Promise((res, rej)=>{
    console.log("hello i m inside promise")
    setTimeout(()=>{
        res("yes ji khajan mil gaya");
    }, 2000);
    
    // rej("bhaaggg bhai policee aa gayi hai");
    
})

console.log(pr)

pr.
then((message)=>{
    // console.log(message);
}).then(()=>{

})
.catch((message)=>{
    console.log(message);
})
        
        
const pr1 = new Promise((res, rej)=>{
    setTimeout(()=>{
    res("yes ji khajan mil gaya");
    console.log("i m inside pr1")},
    2000)
});

console.log(pr1);

const pr2 = new Promise(()=>{
    setTimeout(()=>{
        console.log("I am indside pr2");
    },1000)

    // rej()
});

console.log(pr2);



// what is promise 

// Object
// it will return a settle state --> resolve, PromiseRejectionEvent
// promise asyncronous operations --> mircortask queue
// it will use to avoid the problem of callback hell














