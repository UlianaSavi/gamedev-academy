import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from '../types';
import { UserData } from '../components/login/login.model';
import { Observable } from 'rxjs';
import { CookieService } from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient, private cookieService: CookieService) { }

  public login(formData: {login: string, password: string}): void {
    const ansver: Observable<UserData> = this.http.post<UserData>(`${SERVER_URL}/api/login`, formData);
    ansver.subscribe({
      next: (data: UserData) => {
        const dataForCookie = `token=${data.tokens.token};`
        this.cookieService.setCookie(data.tokens.token, data.tokens.refreshToken);
        this.router.navigate(['dashboard'])
      },
      error: (err: Error) => console.log(err),
    })
  }
}
