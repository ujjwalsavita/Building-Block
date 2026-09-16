let cells = document.querySelectorAll('.cell') ;
let heading =  document.querySelector('#status');
let btn = document.querySelector('#btn');

let arr = ['', '', '','', '', '','', '', ''];
let player = 'X';

// arr.forEach((val, idx)=>{})

cells.forEach((cell,index)=>{
    cell.addEventListener('click',()=>{
        if(arr[index] != '') return;

        arr[index] = player;
        cell.innerHTML = player;

        if(winner() == '1'){
            heading.innerHTML = player + " Win " +"reset and restart the game";
            return ;  
        }

        if(!arr.includes('')){
            heading.innerHTML = "Game tie reset and restart the game"
            return;
        }


        player = player == 'X' ? 'O' : 'X';
        heading.innerHTML = "Player" + player + "Trun";
    });
});


btn.addEventListener('click',()=>{
    // arr =['', '', '','', '', '','', '', ''];

    for(let i = 0 ;i < 9 ; i++){
        arr[i] = '';

        cells[i].innerHTML = '';
    }

    heading.innerHTML = "Player X Turn";
    player = 'X';
});








function winner(){

    // horizontal
    if(arr[0] != '' && 
        arr[0] == arr[1] && 
        arr[1] == arr[2]
    ){
        return 1;
    }

    if(arr[3] != '' && 
        arr[3] == arr[4] && 
        arr[4] == arr[5]
    ){
        return 1;
    }

    if(arr[6] != '' && 
        arr[6] == arr[7] && 
        arr[7] == arr[8]
    ){
        return 1;
    }

    //vertically
    if(arr[0] != '' && 
        arr[0] == arr[3] && 
        arr[3] == arr[6]
    ){
        return 1;
    }

    if(arr[1] != '' && 
        arr[1] == arr[4] && 
        arr[4] == arr[7]
    ){
        return 1;
    }

    if(arr[2] != '' && 
        arr[2] == arr[5] && 
        arr[5] == arr[8]
    ){
        return 1;
    }

    // diagonally
    if(arr[0] != '' && 
        arr[0] == arr[4] && 
        arr[4] == arr[8]
    ){
        return 1;
    }

    if(arr[2] != '' && 
        arr[2] == arr[4] && 
        arr[4] == arr[6]
    ){
        return 1;
    }


    return 0;

}




