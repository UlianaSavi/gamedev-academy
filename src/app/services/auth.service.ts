import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from '../types';
import { IUserData, IUserInfo } from '../components/login/login.model';
import { Observable } from 'rxjs';
import { CookieService } from './cookie.service';
import { Paths } from '../app-routing.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient, private cookieService: CookieService) { }

  public static user: IUserInfo | null = null;

  public login(formData: {login: string, password: string}): void {
    const ansver: Observable<IUserData> = this.http.post<IUserData>(`${SERVER_URL}/api/login`, formData);
    ansver.subscribe({
      next: (data: IUserData) => {
        this.cookieService.setCookie(data.tokens.token, data.tokens.refreshToken);
        AuthService.user = data.userInfo;
        this.router.navigate([Paths.dashboard]);
      },
      error: (err: Error) => console.log(err),
    })
  }
}
