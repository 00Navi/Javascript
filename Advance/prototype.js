
const myarr=[1,2,3,4,5,6]
let heroPower={
    thor:"hammer",
    spyderman:"stick",

    getSpidyPower : function(){
        console.log(`Spidy power is to ${this.spyderman}`);
    }
}

Object.prototype.naveen = function(){
    console.log(`My name is naveen`);
}

Array.prototype.naveens = function(){
    console.log("Naveen in array");
}


//myarr.naveens()


const teacher = {
    makeVideo:true,
}
const teachingSupport = {
    isAvailable: true,
    __proto__: teacher
}

//modern syntax

Object.setPrototypeOf(teachingSupport,teacher)

// let userName = "Javascript     ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    //console.log(`this.${userName}`);
    console.log(`True length is ${this.trim().length}`);
}

// userName.trueLength()
// "Naveen".trueLength()




//Classes

class User{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }

    encryptpassword(){
        return (`${this.password}abcze`);
    }

    changeUserName(){
        return (`${this.username.toUpperCase()}`)
    }
}

const user1 = new User("Naveen","navi@mail.com","158")
console.log(user1.encryptpassword());
console.log(user1.changeUserName());

