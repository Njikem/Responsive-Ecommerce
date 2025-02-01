const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');


if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


//Single Page 

let mainImg = document.getElementById('mainImg');
let smallImage = document.getElementsByClassName('small-img');

smallImage[0].addEventListener('click', () =>{
    mainImg.src = smallImage[0].src;
})

smallImage[1].addEventListener('click', () =>{
    mainImg.src = smallImage[1].src;
})

smallImage[2].addEventListener('click', () =>{
    mainImg.src = smallImage[2].src;
})

smallImage[3].addEventListener('click', () =>{
    mainImg.src = smallImage[3].src;
})