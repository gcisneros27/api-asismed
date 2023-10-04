
export interface IResponse {
  success: boolean;
  httpStatusCode: number;
  appStatusCode: number;
  messages: string | Array<string>;
  data: any;
} 