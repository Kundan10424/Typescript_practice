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
}
declare class Youtube implements TakePhoto, Story {
    cameraMode: string;
    filter: string;
    burst: number;
    shorts: string;
    constructor(cameraMode: string, filter: string, burst: number, shorts: string);
    createStory(): void;
}
//# sourceMappingURL=second.d.ts.map