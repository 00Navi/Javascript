class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class teacher extends User{
    constructor(username,email,password){
        // User.call(this,username)  or
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New Course is added by ${this.username}`);
        
    }
}

const user1 = new teacher("Naveen","naveen@gmail.com","2481")
user1.addCourse()