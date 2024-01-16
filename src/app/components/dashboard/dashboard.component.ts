import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { TooltipBorderType, TooltipMessageType } from 'src/app/shared/tooltip/tooltip.model';
import { TooltipService } from 'src/app/shared/tooltip/tooltip.service';
import { MAX_MESSAGE_LEN } from 'src/app/types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private tooltipService: TooltipService) {}

  public message = new FormControl('', [Validators.required, Validators.maxLength(MAX_MESSAGE_LEN)]);
  public user = AuthService.user;
  public types = TooltipMessageType;

  public sendMessage(type: TooltipMessageType, isCustomMessage: boolean = false): void {
    if (isCustomMessage) {
      this.tooltipService.create(TooltipBorderType.warning, this.message.value || '');
    } else {
      switch (type) {
        case TooltipMessageType.fail:
          this.tooltipService.create(TooltipBorderType.fail, type);
          break;
        case TooltipMessageType.warning:
          this.tooltipService.create(TooltipBorderType.warning, type);
          break;
        case TooltipMessageType.success:
          this.tooltipService.create(TooltipBorderType.success, type);
          break;
      }
    }
  }
}
