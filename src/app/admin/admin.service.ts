import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserDto, UserPage} from './admin.types';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {
  }

  public getUsers(orderBy: string, direction: string, page: number, size: number): Observable<UserPage> {
    return this.http.get<UserPage>(`/api/admin/get-users?direction=${direction}&orderBy=${orderBy}&page=${page}&size=${size}`);
  }

  public updateUsers(users: UserDto[]): Observable<string> {
    return this.http.post<string>('/api/admin/update-users', users, httpOptions);
  }
}
