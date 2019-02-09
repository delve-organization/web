import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Accessibility} from '../tree.types';
import {TreeCardDto} from './tree-card.types';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class TreeCardService {

    constructor(private http: HttpClient) {
    }

    getAllAvailable(): Observable<Array<TreeCardDto>> {
        return this.http.get<Array<TreeCardDto>>('/api/tree-card/all-available');
    }

    delete(treeCardId: number): Observable<string> {
        return this.http.post<string>('/api/tree-card/delete', {treeCardId}, httpOptions);
    }

    create(title: string, description: string, treeId: number,
           imageName: string, color: string, accessibility: Accessibility): Observable<TreeCardDto> {
        return this.http.post<TreeCardDto>('/api/tree-card/create', {
            title,
            description,
            treeId,
            imageName,
            color,
            accessibility
        }, httpOptions);
    }

    edit(treeCardId: number, title: string, description: string, treeId: number,
           imageName: string, color: string, accessibility: Accessibility): Observable<TreeCardDto> {
        return this.http.post<TreeCardDto>('/api/tree-card/edit', {
            treeCardId,
            title,
            description,
            treeId,
            imageName,
            color,
            accessibility
        }, httpOptions);
    }
}
