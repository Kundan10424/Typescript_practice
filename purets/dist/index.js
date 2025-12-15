"use strict";
class User {
    constructor(email, name) {
        this.city = "New York";
        this.email = email;
        this.name = name;
    }
}
const John = new User("john@example.com", "John Doe");
// John.city 
class User1 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "New York";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get coourseCount() {
        return this._courseCount;
    }
    set courseCount(count) {
        if (count <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = count;
    }
}
class SubUser extends User1 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const Doe = new User1("john@example.com", "John Doe");
//# sourceMappingURL=index.js.map