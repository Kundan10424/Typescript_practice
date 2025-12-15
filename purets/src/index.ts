class User{
    email: string
    private name: string
    private readonly city: string = "New York"
    constructor(email: string, name: string){
        this.email = email
        this.name = name
    }
}

const John = new User("john@example.com", "John Doe")

// John.city 




class User1{

    protected _courseCount = 1

    private readonly city: string = "New York"
    constructor(
        public email: string, 
        public name: string){

    }

    private deleteToken(){
        console.log("Token deleted")
    }

    get getAppleEmail(): string{
        return `apple ${this.email}`
    }

    get coourseCount():number{
        return this._courseCount
    }

    set courseCount(count: number){ //in setter there should be no return type
        if(count <=1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = count
    }
}

class SubUser extends User1{
    isFamily: boolean = true

    changeCourseCount(){
        this._courseCount = 4
    }
}

const Doe = new User1("john@example.com", "John Doe")
