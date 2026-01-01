const score: Array<number> = []
const names: Array<string> =[]

function identity1(val: boolean | number): boolean | number{
    return val
}

function identity2(val: any): any{
    return val
}

function identity3<Type>(val: Type): Type{
    return val
}


identity3("3")

function identity4<T>(val: T): T{
    return val
}

identity4("Hello")

interface Bottle{
    brand: string,
    type: string
}

identity4<Bottle>({brand: "Pepsi", type: "Plastic"})

function getSearchProducts<T>(products: T[]): T | undefined {
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProducts = <T>(products: T[]): T | undefined => {
    // do some database operations
    const myIndex = 4
    return products[myIndex]
}

interface Database{
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(val1: T, val2: U): object{
    return{
        val1, 
        val2
    }
}

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addtoCart(product: T){
        this.cart.push(product)
    }
}
