// const User = {
//     name: "Kundan",
//     email: "kundankumar10424@gmail.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}) {}

// let newUesr = {name: "Kundan", isPaid: false, email: "kundankumar10424@gmail.com"}
// createUser(newUesr)



// function createCourse():{name: string, price: number}{
//     return{name: "ReactJS", price: 999}
// }



// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// function createUser(user: User):User{
//     return{name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})


type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    cardDetails?: number;
}

let myUser: User = {
    _id: "1234",
    name: "Kundan",
    email: "kundankumar10424@gmail.com",
    isActive: true
}

type cardNumber = {
    cardnumber: String;
}

type cardDate = {
    cardDate: String;
}

type cvv = [
    cvvnumber: number
]

type cardDetails = cardNumber & cardDate & cvv // creating an intersection type or creating a new type by combining tw other types

myUser.name = "Kundan Kumar"
// myUser._id = "5678"  // Error: Cannot assign to '_id' because it is a read-only property.


export  {}

//* 1:42:14

