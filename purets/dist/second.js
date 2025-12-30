"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        throw new Error("Method not implemented.");
    }
    getReelTime() {
        throw new Error("Method not implemented.");
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, shorts) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.shorts = shorts;
    }
    getSepia() {
        throw new Error("Method not implemented.");
    }
    getReelTime() {
        throw new Error("Method not implemented.");
    }
    createStory() {
        console.log("Story created");
    }
}
//# sourceMappingURL=second.js.map