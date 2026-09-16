// console.log(a);

// {
//     console.log(a);
//     var a = 8;
//     console.log(a);
// }

function fun(){
    // console.log(a);
    let a = 8;
    console.log(a);
}

// fun();


function fun2(){
    console.log("i am inside function 2");
    function fun3(){
        console.log("i am inside function 3");
    }

    console.log("han ji bolo")

    fun3();
}


// fun2()

// closure........


function CSBFS(){

    return {
        deposite: function(amount){
            bankBalcne += amount;
            console.log("your current amount is" + bankBalcne)
        },

        withdrwal : function(amount){
            if(amount > bankBalcne){
                console.log("insufficient amount");
                return ;
            }
            bankBalcne -= amount;
            console.log("Your remiang amount is " + bankBalcne);
        }
    }
     


}

acc = CSBFS();

acc.deposite(20);
acc.withdrwal(120)










