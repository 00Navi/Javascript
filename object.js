const mysym=Symbol("Hello")
let jsUser={
    name:"Naveen",
    age:21,
    mysym:"First",
    location:"Indore",
    email:"xyz@yahoo.com"
}
//console.log(jsUser.email);
// console.log(jsUser["name"]);
// console.log(mysym);
// jsUser.email="xyz@google.com"

// console.log(jsUser["email"]);
// //Object.freeze(jsUser)
// jsUser.email="naveen@gmail.com"
// console.log(jsUser["email"]);


const course={
    coursename:"Javascript",
    courselevel:"Hard",
    courseprice:1485
}
//console.log(course.coursename)
const {courselevel: level}=course
console.log(level);



