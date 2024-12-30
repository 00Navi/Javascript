function myfun(num1,num2){
    let result=num1+num2
    return result
}
// console.log(myfun(4,87))
// result=myfun(8,45)
// console.log("Result: ",result);


function cartPrice(...num1){
    return num1
}
// console.log(cartPrice(500,780,204))

checkobj={
    username:"naveen",
    price:785420
}

function objcheck(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// objcheck(checkobj)

// objcheck({
//     username:"Ravi",
//     price:450
// })

const addone=function(num){
    return num+1
}
//console.log(addone(100))

const user={
    username:"Sam",
    price:9999,
    welComeMsg: function(){
        console.log(`${this.username},Welcome to the page`)
    }
}
// user.welComeMsg()
// user.username="Ram"
// user.welComeMsg()


// const addTwo=(num,num1)=>{
//     return num+num1
// }

// console.log(addTwo(4,8))   //OR

// const addTwo=(num1,num2)=>(num1+num2)
// console.log(addTwo(10,20));




//if else

const userLoggedIN=true
const debitCard=true

// if(userLoggedIN && debitCard){
//     console.log("Purchase successful");
// }

// for(let i=0;i<10;i++){
//     for(let j=0;j<10;j++){
//         console.log("*");
//     }
//     console.log("\n");
// }


// const arr=[1,2,3,4,5]

// for (const element of arr) {
//     console.log(element);
    
// }

// const greeting="Hello JavaScript!"
// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`);
    
// }


//Maps

const map=new Map()
map.set('In','India')
map.set('London','UK')
map.set('Sydney','Australia')

// console.log(map);


const myObj={
    cpp:"C++",
    js:"JavaScript",
    py:"Pthon",
    rb:"Ruby"
}

// for (const key in myObj) {
//     console.log(`${key} is the shortcut for ${myObj[key]}`);
// }

const prgm=["js","py","cpp","java","c"]

// for (const key in prgm) {
//     console.log(prgm[key]);
    
// }

// for (const key in map) {
//     console.log(map[key]);
// }

const coding=["js","py","cpp","java","c"]

// coding.forEach(function (item,index,Array){
//         console.log(item,index,Array);
// })

const myCode=[
    {
        lang:"js",
        name:"JavaScript"
    },
    {
        lang:"cpp",
        name:"C++"
    },
    {
        lang:"py",
        name:"Python"
    },
    {
        lang:"Java",
        name:"Java"
    }
]

// myCode.forEach((item)=>{
//     console.log(item.name);
// }
// )

const myNum=[1,2,3,4,5,6,7,8,9]

const myNum1=myNum.filter((num)=>{
    return num>6
})
//console.log(myNum1);


//reduce

const myNums=[1,2,3,4,5,6]

// const myTotal=myNums.reduce(function(acc,curr){
//     console.log(`acc:${acc} and curval:${curr}`);
//     return acc+curr
// },0)

const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);

const shoppingCart=[
    {
        courseName:"JavaScript",
        price:1599
    },
    {
        courseName:"Python",
        price:4520
    },
    {
        courseName:"Web Development",
        price:640
    },
    {
        courseName:"Data Science",
        price:45000
    },

]

const pricetopay=shoppingCart.reduce((acc,course)=>acc+course.price,0)
console.log(pricetopay);


