let input = document.getElementById('url');
let  btn = document.getElementById('btn');
let qr = document.getElementById('qr');


function generator(){
    let st = input.value.trim();
    // console.log(st);

    output = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + st;

    qr.src = output;

    qr.style.display = 'block';
    
}

//  https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example



