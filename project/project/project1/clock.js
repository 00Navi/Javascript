//const clock = document.querySelector('#clock')
const clock = document.getElementById('banner')



setInterval(function(){
    let date=new Date();
    // console.log(date.toLocaleTimeString());
    
    banner.innerHTML=date.toLocaleTimeString();
},1000);
