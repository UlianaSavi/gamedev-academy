import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from '../types';
import { UserData } from '../components/login/login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private authSecretKey = 'authToken';

  constructor(private router: Router, private http: HttpClient) {
    this.isAuthenticated = !!localStorage.getItem(this.authSecretKey);
  }

  login(formData: {login: string, password: string}): void {
    const ansver: Observable<UserData> = this.http.post<UserData>(`${SERVER_URL}/api/login`, formData);
    ansver.subscribe({
      next: (data) => {
        console.log('data', data);
        localStorage.setItem(this.authSecretKey, data.data.tokens.token);
        this.isAuthenticated = true;
        this.router.navigate(['dashboard'])
      },
      error: (err: Error) => console.log(err),
    })
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
