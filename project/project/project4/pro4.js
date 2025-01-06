const randomColor=function(){
    const hex="0123456789ABCDEF";
    let color='#';

    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
};
//console.log(randomColor());
let intervalId;
const startchangingcolor=function(){
    if(!intervalId){
    intervalId=setInterval(changeColor,2000);
    console.log("Started");
    
    }
    function changeColor(){
        document.body.style.backgroundColor=randomColor();
    }
};
const stopchangingcolor=function(){
    clearInterval(intervalId);
    intervalId=null;
    console.log("Stopped");
    

}
document.querySelector('#start').addEventListener('click',startchangingcolor);
document.querySelector('#stop').addEventListener('click',stopchangingcolor);
