import { Component, OnInit } from '@angular/core';
import { ITooltip } from './tooltip.model';
import { TooltipService } from './tooltip.service';
@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {
  constructor(private tooltipService: TooltipService) {}

  public tooltips: ITooltip[] = [];

  ngOnInit(): void {
    this.tooltips = this.tooltipService.tooltips;
  }

  public close(id: number) {
    this.tooltipService.close(id);
  }
}
