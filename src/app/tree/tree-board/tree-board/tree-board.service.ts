import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TreeBoardDto} from '../tree-board.types';
import {Accessibility} from '../../tree.types';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class TreeBoardService {

    constructor(private http: HttpClient) {
    }

    getAllAvailable(): Observable<Array<TreeBoardDto>> {
        return this.http.get<Array<TreeBoardDto>>('/api/tree-board/all-available');
    }

    delete(treeBoardId: number): Observable<string> {
        return this.http.post<string>('/api/tree-board/delete', treeBoardId, httpOptions);
    }

    create(title: string, description: string, treeId: number,
           imageName: string, color: string, accessibility: Accessibility): Observable<TreeBoardDto> {
        return this.http.post<TreeBoardDto>('/api/tree-board/create', {
            title,
            description,
            treeId,
            imageName,
            color,
            accessibility
        }, httpOptions);
    }

    edit(treeBoardId: number, title: string, description: string, treeId: number,
           imageName: string, color: string, accessibility: Accessibility): Observable<TreeBoardDto> {
        return this.http.post<TreeBoardDto>('/api/tree-board/edit', {
            treeBoardId,
            title,
            description,
            treeId,
            imageName,
            color,
            accessibility
        }, httpOptions);
    }
}
