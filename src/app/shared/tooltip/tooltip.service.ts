import { Injectable, OnDestroy } from '@angular/core';
import { TooltipBorderType, ITooltip } from './tooltip.model';
import { TOOLTIPS_MAX_LENGTH, TOOLTIP_TIMER } from 'src/app/types';
import { Subject, takeUntil, timer } from 'rxjs';

@Injectable()
export class TooltipService implements OnDestroy {
  public tooltips: ITooltip[] = [];

  private timer = timer(TOOLTIP_TIMER, TOOLTIP_TIMER); // 1st time after TOOLTIP_TIMER ms and then every TOOLTIP_TIMER ms
  private destroy$ = new Subject<void>();

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public create(type: TooltipBorderType, message: string): void {
    if (this.tooltips.length >= TOOLTIPS_MAX_LENGTH) {
      const first = 0;
      this.close(first); // close oldest tooltip if it's already max number of tooltips
    }
    this.tooltips.push({
      type: type,
      message: message,
      creationTime: new Date()
    });

    this.closeByTimer();
  }

  public close(id: number): void {
    this.tooltips.splice(id, 1);
  }

  private closeByTimer(): void {
    this.timer.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.tooltips.forEach((tooltip, i) => {
        const tooltipDate = (new Date().getTime() - tooltip.creationTime.getTime());
        if (tooltipDate >= TOOLTIP_TIMER) {
          this.close(i);
        }
      });
    });
  }
}
