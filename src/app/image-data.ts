export class ImageData {
    name: string;
    image: string; // in base64
    resultImage: string; // in base64
    objectMaxRadius: number;
    objectMinRadius: number;
    objectColor: string;
    objectActualCount: number;

    static parse(jsonObject: object): ImageData {
        const imageData: ImageData = new ImageData();
        Object.assign(imageData, jsonObject);
        return imageData;
    }
}
