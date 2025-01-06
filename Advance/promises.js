// const promiseOne = new Promise(function(reolve,reject){
//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve()
//     },2000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"naveen",email:"naveenn@gmail.com"})
    },1000)
})

promiseTwo.then(function(user){
    console.log(user);
    
})

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;

//         if(!error){
//             resolve({username:"naveen",password:"123"})
//         }
//         else{
//             reject("Error:something went wrong")
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("The promise is either resolved or rejected");
    
// })

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;

        if(!error){
            resolve({username:"Javascript", password:"1234"})
        }
        else{
            reject("Error: JS went wrong")
        }
    },1000)
})
// promiseFive.then(function(user){
//     console.log(user);
// })

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log("Error");
        
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     const response =await fetch('https://api.github.com/users/00Navi');
//     const data = await response.json()
//     console.log(data);
// }
// getAllUsers()

fetch('https://api.github.com/users/00Navi')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);
    
})