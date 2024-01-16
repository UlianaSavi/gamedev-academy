export interface ITooltip {
  type: TooltipBorderType,
  message: string,
  creationTime: Date
}

export enum TooltipBorderType {
  warning = '#FCCA00',
  success = '#249F5D',
  fail = '#FC5A5A'
}

export enum TooltipMessageType {
  warning = 'Предупредительное сообщение',
  success = 'Сообщение об успехе',
  fail = 'Сообщение об ошибке'
}
