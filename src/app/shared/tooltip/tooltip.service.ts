import { Injectable } from '@angular/core';
import { TooltipBorderType, ITooltip } from './tooltip.model';

@Injectable()
export class TooltipService {
  public tooltips: ITooltip[] = [];

  public create(type: TooltipBorderType, message: string): void {
    this.tooltips.push({
      type: type,
      message: message,
    });
  }

  public close(id: number): void {
    // TODO: по истечению таймера
    this.tooltips.splice(id, 1);
  }
}
