// const el = document.createElement("h1");
// el.innerHTML="Coding Seekho Jinda Baad";
{/* <h1 style>ajjflajglkjaljg</h1> */}
// const el2 = document.createElement("h1");
// el2.innerHTML="Coding Seekho Jinda Baad";

// const el3 = document.createElement("h1");
// el3.innerHTML="Coding Seekho Jinda Baad";

// const root = document.getElementById('root');
// root.appendChild(el)



//******************************************** */
// const React = {
//     createElement: function(s1, s2){
//         const el = document.createElement(s1);
//         el.innerHTML=s2;

//         root.appendChild(el);
//     }
// }


// React.createElement("h1","hello");
// React.createElement("h2","bye");
// React.createElement("h3","see you dost");


// ********************************************
// const el = React.createElement('h1', null, "coding seekho amar rahe");
// const el2 = React.createElement('h1', null, "coding seekho amar rahe 2");
// // console.log(el);

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(el)
// root.render(el2)
// console.log(root)

//**************************************888 */


function App(){

    return (
        <>
            <p>1 star 2 star Coding seekho super star</p>
            <p>1 star 2 star Coding seekho super star2 </p>
        </>
    );
}

// const el = app()
// const el = App()
const el = <App />

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(el);