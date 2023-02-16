let circle = document.getElementById("circle");
let progValue = document.getElementById("value");
let start=30;
let progStart = 0, progEnd = 100, speed = start*10;

let progress = setInterval(() => {

    progEnd--;
    // progValue.innerHTML = progStart + '%';
    circle.style.background=`conic-gradient(rgb(17,255,8) ${progEnd*3.6}deg,rgba(0,0,0,0.1) 0deg)`;
    if (progStart == progEnd) {
        clearInterval(progress);
    }
}, speed)

let clockObj = document.getElementById("clock")


let a = setInterval(() => {

    clockObj.innerText =start+' SECONDS'
    start=start-1;
    if(start<=0){
        clearInterval(a);
    }
}, 1000)