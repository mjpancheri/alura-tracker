
export interface IConfirm {
  active: boolean;
  description: string;
  callback(): void;
}