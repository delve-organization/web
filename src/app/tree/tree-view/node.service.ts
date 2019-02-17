import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NodeDto, UserNodeRelationDto} from "../tree.types";

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class NodeService {

    constructor(private http: HttpClient) {
    }

    public getNodesFromRoot(id: number): Observable<NodeDto> {
        return this.http.get<NodeDto>(`/api/node/id/${id}`);
    }

    public setRelation(nodeId: number, visited: boolean): Observable<string> {
        const relation = {
            nodeId: nodeId,
            visited: visited
        };

        return this.http.post<string>('/api/node/relation', relation, httpOptions);
    }

    public getRelationsByUser(): Observable<UserNodeRelationDto[]> {
        return this.http.get<UserNodeRelationDto[]>('/api/node/relations');
    }
}
