


interface User {
    readonly DBId: number
    email: string
    userId: number
    googleId?: string
    startTrial(): string
    getCoupon(couponName: string, value: number): number
}

// we can add another prperty or methods in interface later 

interface User {
    githubToken: string
}

// interface can be extended using extends keyword
interface Admin extends User {
    role: "admin" | "ta" | "learner"
}


const kundan: User ={
    DBId: 12345,
    email: "kundan@example.com",
    userId: 11,
    githubToken: "github12345",
    startTrial: () => {
        return "trial started" 
    },
    
    getCoupon: (name: "Kundan10", off: 10) => {
        return 10
    }
}

kundan.email = "kundan@k.com"