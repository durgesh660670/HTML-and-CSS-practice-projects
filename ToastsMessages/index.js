let messageObj=document.getElementById('message');
let btnObj=document.getElementById('btn');
let showmessage=document.getElementById('show_message');

showmessage.addEventListener('click',()=>{


    messageObj.style.display='block';
    messageObj.classList.remove('hide');
    messageObj.classList.add("show");

    setTimeout(() => {
        messageObj.classList.remove('show');
        messageObj.classList.add("hide");
    }, 3000);
})


btnObj.addEventListener('click',()=>{

    messageObj.classList.remove('show');
    messageObj.classList.add("hide");
   
})