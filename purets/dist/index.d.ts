declare class User {
    email: string;
    private name;
    private readonly city;
    constructor(email: string, name: string);
}
declare const John: User;
declare class User1 {
    email: string;
    name: string;
    protected _courseCount: number;
    private readonly city;
    constructor(email: string, name: string);
    private deleteToken;
    get getAppleEmail(): string;
    get coourseCount(): number;
    set courseCount(count: number);
}
declare class SubUser extends User1 {
    isFamily: boolean;
    changeCourseCount(): void;
}
declare const Doe: User1;
//# sourceMappingURL=index.d.ts.map