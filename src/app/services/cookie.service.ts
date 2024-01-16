import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  public hasCookie(): boolean {
    return !!document.cookie.length;
  }

  public setCookie(token: string, refreshToken: string): void {
    document.cookie = `token=${token}`;
    document.cookie = `refreshToken=${refreshToken}`;
  }
}
