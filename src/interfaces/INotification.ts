export enum NotificationType {
  SUCCESS = 'is-success',
  ERROR = 'is-danger',
  WARNING = 'is-warning',
  INFO = 'is-info',
}

export interface INotification {
  id: number;
  type: NotificationType;
  title: string;
  message: string;
}