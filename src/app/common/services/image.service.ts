import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ImageService {

    constructor(private http: HttpClient) {
    }

    public upload(file: File): Observable<HttpEvent<{}>> {
        const formData: FormData = new FormData();
        formData.append('file', file);

        const request = new HttpRequest('POST', '/api/images/upload', formData, {
            reportProgress: true
        });

        return this.http.request<HttpEvent<{}>>(request);
    }
}
