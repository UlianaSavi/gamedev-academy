import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './tooltip-icon.component.svg',
  styleUrls: ['./tooltip-icon.component.css']
})
export class TooltipIconComponent {
  @Input() fillColor: string = '#FC5A5A'; // red as default color
}
