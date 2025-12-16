"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 8;
    }
}
// Cannot create an instance of an abstract class.
// its only used as a base class for other classes to extend from.
class Instagram1 extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const photo = new Instagram1("rear", "winter", 5);
//* 3:35:40
//# sourceMappingURL=abstract.js.map