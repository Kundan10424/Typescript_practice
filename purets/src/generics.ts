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