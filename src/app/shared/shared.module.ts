import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipIconComponent } from './tooltip-icon/tooltip-icon.component';



@NgModule({
  declarations: [
    TooltipComponent,
    TooltipIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TooltipComponent,
    TooltipIconComponent
  ]
})
export class SharedModule { }
