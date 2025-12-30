interface TakePhoto {
    cameraMode: string;
    filter: string;
    burst: number;
}
interface Story {
    createStory(): void;
}
declare class Instagram implements TakePhoto {
    cameraMode: string;
    filter: string;
    burst: number;
    constructor(cameraMode: string, filter: string, burst: number);
    getSepia(): void;
    getReelTime(): number;
}
declare class Youtube implements TakePhoto, Story {
    cameraMode: string;
    filter: string;
    burst: number;
    shorts: string;
    constructor(cameraMode: string, filter: string, burst: number, shorts: string);
    getSepia(): void;
    getReelTime(): number;
    createStory(): void;
}
//# sourceMappingURL=second.d.ts.map