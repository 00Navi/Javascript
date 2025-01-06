// let score= "True"
// console.log(typeof score)
// console.log(typeof (score))

// let valueInNumber=Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// let SomeNumber = 84
// let stringNumber = String(SomeNumber)
// console.log(typeof stringNumber )

// let value=45
// let negValue=-value
// console.log(negValue);

// let gameCounter=100;
// gameCounter++;
// console.log(gameCounter);

// console.log("05">2)
// console.log("5"===5);

// const id=Symbol("100")
// const anotherId=Symbol("100")
// console.log(id===anotherId)

// const name="Rohit";
// const repoCount=4;

// console.log(`My name is ${name} and I have ${repoCount} repos`);

// console.log(name.toUpperCase());
// console.log(name.charAt(3));
// console.log(name.indexOf('t'));

// const url="https://www.xyz$45.com"

// console.log(url.replace('$45','travel'))

// const score=400
// console.log(score);

// const balance= new Number(500);
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherBalance=187.654
// console.log(otherBalance.toPrecision(3))

// const hundred=1000000000;
// console.log(hundred.toLocaleString('en-In'));

// console.log(Math.abs(-87))
// console.log(Math.floor(8.72))
// console.log(Math.ceil(8.72));
// console.log(Math.max(8,7,9,10,5,6));
// console.log(Math.min(8,7,9,10,5,6));
// console.log(Math.PI);
// console.log(Math.pow(4,8));
// console.log((Math.random()*10)+1);

// const min=10;
// const max=20;

// console.log(Math.floor(Math.random()*(max-min+1))+min);

let myDate = new Date()
//console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

// let newDate=new Date("2011,5,15")
// console.log(newDate.toDateString());

// let myTime=Date.now()
// console.log(myTime);
// console.log(Math.floor(Date.now()/1000));

// console.log(myDate.toLocaleString("default",{weekday:"long"}));

let myArr=[5,7,1,3,4,5]
//console.log(myArr);

// myArr.push(32)
// console.log(myArr);
// myArr.pop()
// myArr.pop(5)
// myArr.pop(7)
// myArr.shift(10)
// console.log(myArr);

// const myn=myArr.slice(0,4)
// console.log(myn);
// console.log(myArr)

// const myn1=myArr.splice(0,3)
// console.log(myn1);
// console.log(myArr);

let marvel_heroes=["Ironman","Thor","Captain America","Hulk"]
let dc_heroes=["Batman","Superman","Flash"]
// let all_heroes=marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);
const all_heroes=[...marvel_heroes,...dc_heroes]
// console.log(all_heroes);

const arr1=[1,2,3,[4,5,6],[7,8],[9,[10,11,12]]]
const arr2=arr1.flat(2)
//console.log(arr2);

console.log(Array.from("Naveen"))






























