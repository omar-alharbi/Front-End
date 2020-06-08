import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterPayload } from '../reg-user/register-payload';
import { RegisterOrgPayload } from '../reg-org/register-org-payload';
import { Observable } from 'rxjs';
import { LoginPayload } from '../login/login.payload';
import { JwtAuthResponse } from './jwt-auth-response';
import { LocalStorageService } from 'ngx-webstorage';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:8080/api/auth/';

  constructor(private httpClinet: HttpClient, private localStorageService: LocalStorageService ) { 

  }

  register(registerPayload:RegisterPayload):Observable<any> {
    return this.httpClinet.post(this.url+'signup', registerPayload);
  }

  registerOrg(registerPayload:RegisterOrgPayload):Observable<any> {
    return this.httpClinet.post(this.url+'signup', registerPayload);
  }


  login(loginPayload:LoginPayload) : Observable<boolean> {
    return this.httpClinet.post<JwtAuthResponse>(this.url + 'login', loginPayload).pipe(map(data => {
      this.localStorageService.store('authenticationToken', data.authenticationToken);
      this.localStorageService.store('username', data.username);
      return true
    }));
  }

  isAuthenticated(): boolean {
    return this.localStorageService.retrieve('username') != null;
  }

  logout() {
    this.localStorageService.clear('authenticationToken');
    this.localStorageService.clear('username');
  }
}
