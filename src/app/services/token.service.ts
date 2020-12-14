import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  get isLogin(): boolean {
    let token = localStorage.getItem('access_token');
    return token !== null ? true : false;
  }

  getToken() {
    return localStorage.getItem('access_token');
  }
}
