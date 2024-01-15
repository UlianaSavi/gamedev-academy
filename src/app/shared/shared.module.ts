import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipIconComponent } from './tooltip-icon/tooltip-icon.component';
import { TooltipService } from './tooltip/tooltip.service';



@NgModule({
  declarations: [
    TooltipComponent,
    TooltipIconComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [TooltipService],
  exports: [
    TooltipComponent,
    TooltipIconComponent
  ],
})
export class SharedModule { }
