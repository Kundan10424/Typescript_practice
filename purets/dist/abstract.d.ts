declare abstract class TakePhoto {
    cameraMode: string;
    filter: string;
    constructor(cameraMode: string, filter: string);
    abstract getSepia(): void;
    getReelTime(): number;
}
declare class Instagram1 extends TakePhoto {
    cameraMode: string;
    filter: string;
    burst: number;
    constructor(cameraMode: string, filter: string, burst: number);
    getSepia(): void;
}
declare const photo: Instagram1;
//# sourceMappingURL=abstract.d.ts.map