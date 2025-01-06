const fun = function(username,loginCount,isloggedIn){
    this.username=username,
    this.loginCount=loginCount
    this.isloggedIn=isloggedIn

}
const user1= new fun("Naveen","10","true")
const user2 = new fun("Rahul","66","false")
console.log(user2);
console.log(user1);



