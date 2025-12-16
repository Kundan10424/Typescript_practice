


abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

   abstract getSepia(): void

   getReelTime():number{
        return 8;
   }
}

 // Cannot create an instance of an abstract class.
// its only used as a base class for other classes to extend from.


class Instagram1 extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter);
    }

    getSepia(): void {
        console.log("Sepia");
    }
}

const photo = new Instagram1("rear","winter", 5);

//* 3:35:40