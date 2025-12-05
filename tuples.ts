


const user: Array<String | number> = ["john", 25] // but it can be in any order like [25, "john"] or ["john", 25]
// but if we want to have a specific order and specific types at each index we can use tuples

const userTuple: Array<[string, number]> = [["john", 25]] // now the order matters and the types at each index matters too
// userTuple.push([25, "john"]) // Error: Type 'number' is not assignable to type 'string' and vice versa


let rgb: Array<[number, number, number]> = [[255, 0, 0]] // tuple for rgb color
rgb.push([0, 255, 0]) // valid

// rgb.push([255, 0, 0, 0]) // Error: Source has 4 element(s) but target allows only 3


type User = [number, string] // defining a tuple type

const newUser: User = [1, "john"] // using the tuple type

newUser.push(2) // valid but not recommended, tuples are meant to have fixed length

export {}
