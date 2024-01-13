import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MAX_MESSAGE_LEN } from 'src/app/types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public message = new FormControl('', [Validators.required, Validators.maxLength(MAX_MESSAGE_LEN)]);

  public asd() {
    if (this.message.valid) {
      // TODO: Сделать вывод сообщения в тултип
      console.log(this.message.value);
      console.log('user', AuthService.user);
    }
  }
}
