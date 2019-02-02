import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {EditUserRequest} from '../../settings/settings.types';
import {UserDto} from '../../admin/admin.types';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
    }

    public editUser(request: EditUserRequest): Observable<UserDto> {
        return this.http.post<UserDto>('/api/user/edit', request, httpOptions);
    }

    public getUser(userId: number): Observable<UserDto> {
        return this.http.get<UserDto>('/api/user/get-user?userId=' + userId);
    }
}
