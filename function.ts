


function addTwo(num: number): number{

    return num + 2;
    // return "hello";
}

function getupper(val: string): string{
    return val.toUpperCase();
}

function signUp(name: string, email: string, isPaid:boolean){
    
}

let loginUser = (name: string, email: string, isPaid:boolean) =>{

}

addTwo(3)
getupper("hello")
signUp("John", "john@example.com", true)
loginUser("John", "john@example.com", false)




function getValue(myVal: number){
    if(myVal > 5){
        return true;
    }
    return "200 OK";
}

const getHello = (s: string): string =>{
    return "";

}


const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]

heros.map((hero): string => {
    return `hero is ${hero}`;
    // return 2
})


function consoleError(errmsg : string): void{
    console.log(errmsg);
}

function handleError(errmsg : string): never {
    throw new Error(errmsg);
}







export {}