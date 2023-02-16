let a1=document.getElementById('menuBtn');
let a2=document.getElementById('menu');
let a3=document.getElementById('sideNav');

let preloaderObj=document.getElementById("preloader");

window.addEventListener("load",()=>{
    preloaderObj.style.display="none";
})


a3.style.right='-250px';
a1.addEventListener("click",()=>{

    if(a3.style.right=="-250px"){
        a3.style.right='0';
        a2.src='img/close.png'
    }
    else{
        a3.style.right='-250px';
        a2.src='img/menu.png'
    }
})
