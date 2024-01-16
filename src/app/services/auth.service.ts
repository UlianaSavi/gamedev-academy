import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from '../types';
import { ILoginInfo, IUserData, IUserInfo } from '../components/login/login.model';
import { Observable } from 'rxjs';
import { CookieService } from './cookie.service';
import { Paths } from '../app-routing.module';
import { TooltipService } from '../shared/tooltip/tooltip.service';
import { TooltipBorderType } from '../shared/tooltip/tooltip.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private router: Router, private http: HttpClient,
    private cookieService: CookieService,
    private tooltipService: TooltipService) { }

  public static user: IUserInfo | null = JSON.parse(String(localStorage.getItem('userInfo'))) || null;
  public static rememberPassword: boolean = !!AuthService.user?.rememberPassword;

  public login(formData: ILoginInfo): void {
    const ansver: Observable<IUserData> = this.http.post<IUserData>(`${SERVER_URL}/api/login`, formData);
    ansver.subscribe({
      next: (data: IUserData) => {
        this.cookieService.setCookie(data.tokens.token, data.tokens.refreshToken);

        const userInfo: IUserInfo = {
          userId: data.userInfo.userId,
          userAvatar: data.userInfo.userAvatar,
          userName: data.userInfo.userName,
          userRole: data.userInfo.userRole,
          rememberPassword: formData.rememberPassword,
          password: formData.rememberPassword ? formData.password : null
        };
        localStorage.setItem('userInfo', JSON.stringify(userInfo));

        AuthService.user = userInfo;
        this.router.navigate([Paths.dashboard]);
      },
      error: (err: Error) => this.tooltipService.create(TooltipBorderType.fail, err.message),
    })
  }
}
