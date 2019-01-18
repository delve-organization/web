import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TreeDto} from './tree.types';

@Injectable()
export class TreeService {

  constructor(private http: HttpClient) {
  }

  getAllTrees(): Observable<Array<TreeDto>> {
    return this.http.get<Array<TreeDto>>('/api/tree/all');
  }

  getTreeById(id: number): Observable<TreeDto> {
    return this.http.get<TreeDto>(`/api/tree/id/${id}`);
  }
}
