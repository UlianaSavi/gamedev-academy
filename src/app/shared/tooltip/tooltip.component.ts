import { Component } from '@angular/core';
import { ITooltip, TooltipType } from './tooltip.model';
@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent {
  public tooltips: ITooltip[] = [{
    type: TooltipType.fail,
    message: 'Сообщение об ошибке',
  }];

  public create(type: TooltipType, message: string, iconSrc: string): void {
    // TODO: добавить везде где нужно по коду
    this.tooltips.push({
      type: type,
      message: message,
    });
  }

  public close(): void {
    // TODO: закрытие уведомления по клику и по истечению таймера (мб разделить на 2 функции)
    // TODO: выделить иконку error.svg в отдельный компонент в shared. Добавить ей логику передачи нужного цвета через input.
  }
}
