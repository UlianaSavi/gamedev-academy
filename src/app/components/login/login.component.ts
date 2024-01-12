import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MIN_PASSWORD_LEN } from 'src/app/types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (private authService : AuthService) {}

  public hidePassword = false;

  public form: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(MIN_PASSWORD_LEN)]),
  });;

  public login(): void {
    if (this.form?.invalid) {
      return;
    }
    this.authService.login(this.form?.value)
  }

  public isInvalid(inputName: string): boolean {
    return !!this.form.get(inputName)?.touched && !!this.form.get(inputName)?.invalid;
  }

  public setPasswordVisible() {
    this.hidePassword = !this.hidePassword;
  }
}
