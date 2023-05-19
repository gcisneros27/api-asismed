
export interface IResponse {
  success: boolean;
  httpStatusCode: number;
  appStatusCode: number;
  messages: Array<string>;
  data: any;
} 