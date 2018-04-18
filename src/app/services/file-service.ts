import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ImageData } from '../image-data';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class FileService {
    imageCountUrl = 'http://localhost:9080/EasyCountServer/rest/api/count';
    constructor(private http: HttpClient) { }

    evaluateImage(imageData: ImageData) {
        return this.http.post(this.imageCountUrl, JSON.stringify(imageData), httpOptions);
    }
}
