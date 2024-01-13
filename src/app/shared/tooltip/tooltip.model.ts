export interface ITooltip {
  type: TooltipType,
  message: string,
}

export enum TooltipType {
  warning = '#FCCA00',
  success = '#249F5D',
  fail = '#FC5A5A'
}
