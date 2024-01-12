import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from '../types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private authSecretKey = 'authSecretKey';

  constructor(private router: Router, private http: HttpClient) {
    this.isAuthenticated = !!localStorage.getItem(this.authSecretKey);
  }

  login(formData: {login: string, password: string}): void {
    const data = this.http.post(`${SERVER_URL}/api/login`, JSON.stringify(formData));

    console.log('data', data);

    // if (isAdmin) {
    //   const authToken = 'authToken';
    //   localStorage.setItem(this.authSecretKey, authToken);
    //   this.isAuthenticated = true;
    //   this.router.navigate(['dashboard'])
    // }
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
