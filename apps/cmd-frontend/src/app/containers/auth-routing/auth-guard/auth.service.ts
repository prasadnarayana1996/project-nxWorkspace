import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn(): Boolean  {
    const helper = new JwtHelperService();
     const token = localStorage.getItem('auth_token');
     let tokenExpired = helper.isTokenExpired(token) ? true : false;
    //  return (token && !tokenExpired) ? true : false;
    return true
   }
}
