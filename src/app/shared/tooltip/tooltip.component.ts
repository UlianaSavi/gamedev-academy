import { Component, OnInit } from '@angular/core';
import { ITooltip } from './tooltip.model';
import { TooltipService } from './tooltip.service';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { TOOLTIP_UP_HEIGHT } from 'src/app/types';
@Component({
  selector: 'app-tooltip',
  animations: [
    trigger('smoothShow', [
      transition(':increment, * => enabled, :enter', animate('1s ease', keyframes([
        style({ transform: 'scale(1)', offset: 0, opacity: 0, top: TOOLTIP_UP_HEIGHT}),
        style({ transform: 'scale(1.03)', offset: 0.7, opacity: 1}),
        style({ transform: 'scale(1)', offset: 1, opacity: 1, top: '0px'})
      ]))),
    ]),
  ],
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {
  constructor(private tooltipService: TooltipService) {}

  public tooltips: ITooltip[] = [];

  ngOnInit(): void {
    this.tooltips = this.tooltipService.tooltips;
  }

  public close(id: number): void {
    this.tooltipService.close(id);
  }
}
