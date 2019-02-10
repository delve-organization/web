import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Accessibility, TreeDto} from './tree.types';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class TreeService {

    constructor(private http: HttpClient) {
    }

    getAllAvailableTrees(): Observable<Array<TreeDto>> {
        return this.http.get<Array<TreeDto>>('/api/tree/all-available');
    }

    getTreeById(id: number): Observable<TreeDto> {
        return this.http.get<TreeDto>(`/api/tree/id/${id}`);
    }

    create(title: string, rootNodeId: number, accessibility: Accessibility): Observable<TreeDto> {
        return this.http.post<TreeDto>('/api/tree/create', {
            title,
            rootNodeId,
            accessibility
        }, httpOptions);
    }
}
