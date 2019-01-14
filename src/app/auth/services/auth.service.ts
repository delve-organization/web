import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthLoginInfo} from '../types/login-info.types';
import {JwtResponseTypes} from '../types/jwt-response.types';
import {Observable} from 'rxjs';
import {SignupInfoTypes} from '../types/signup-info.types';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponseTypes> {
    return this.http.post<JwtResponseTypes>('/api/auth/signin', credentials, httpOptions);
  }

  signUp(info: SignupInfoTypes): Observable<string> {
    return this.http.post<string>('/api/auth/signup', info, httpOptions);
  }
}
