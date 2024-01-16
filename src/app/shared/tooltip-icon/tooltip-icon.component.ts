import { Component, Input } from '@angular/core';
import { TooltipMessageType } from '../tooltip/tooltip.model';

@Component({
  selector: 'app-svg',
  templateUrl: './tooltip-icon.component.svg',
  styleUrls: ['./tooltip-icon.component.css']
})
export class TooltipIconComponent {
  @Input() fillColor: string = TooltipMessageType.fail; // red as default color
}
