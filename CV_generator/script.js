const AddNewWE=()=>
{
    let newNode=document.createElement('textarea');
    
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-3');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','Enter here');

    let wEObj=document.getElementById('WE');
    let wABObj=document.getElementById('weAddButton');
    wEObj.insertBefore(newNode,wABObj);

}
const AddNewAQ=()=>
{
    let newNode=document.createElement('textarea');
    
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-3');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','Enter here');

    let aQObj=document.getElementById('AQ');
    let aABObj=document.getElementById('aqAddButton');
    aQObj.insertBefore(newNode,aABObj);
}

// generate cv

const generateCV=()=>
{
    // personal destails
    let nameObj=document.getElementById('nameField').value;
    let nameTObj=document.getElementById('nameFieldT1');
    nameTObj.innerHTML=nameObj;
    let phoneObj=document.getElementById('phoneField').value;
    let phoneTObj=document.getElementById('phoneFieldT1');
    phoneTObj.innerHTML=phoneObj;
    let addressObj=document.getElementById('addressField').value;
    let addressTObj=document.getElementById('addressFieldT1');
    addressTObj.innerHTML=addressObj;


    // social links

    let fbObj=document.getElementById('fbField').value;
    let fbTObj=document.getElementById('fbFieldT1');
    console.log(fbObj);
    fbTObj.innerHTML=fbObj;
    let instaObj=document.getElementById('instaField').value;
    let instaTObj=document.getElementById('instaFieldT1');
    instaTObj.innerHTML=instaObj;
    let liObj=document.getElementById('liField').value;
    let liTObj=document.getElementById('liFieldT1');
    liTObj.innerHTML=liObj;
    
    // objective

    let 



}