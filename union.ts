


let score: number | string = 73

score = 44

score = '55'

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let John : User | Admin = { name: 'Bruce', id: 3344 }

John = { username: 'JD', id: 2233 }


function getDBId(id: number | string) {
    // making an API call
    console.log(`DB id is: ${id}`)
    if(typeof id === 'string'){
        id.toUpperCase()
    }

}


getDBId(3)
getDBId('USRS')


// array of union types

const data: Array<number | string> = [1, 2, 3, '4', '5']

data.push(6)
data.push('7')

let seatAllotment: 'aisle' | 'middle' | 'window'

seatAllotment = 'aisle'
// seatAllotment = 'crew'  Error