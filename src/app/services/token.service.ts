import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  get isLogin(): boolean {
    if( localStorage.getItem('access_token') === null || localStorage.getItem('access_token') === undefined ){
      return false;
    }
    let token = localStorage.getItem('access_token');
    
    
    return token !== null ? true : false;
  }

  getToken() {
    if( localStorage.getItem('access_token') === null || localStorage.getItem('access_token') === undefined ){
      return "token blum ada";
    }
    return localStorage.getItem('access_token');
  }
}
