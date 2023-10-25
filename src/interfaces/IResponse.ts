
export interface IResponse {
  success: boolean;
  appStatusCode: number;
  messages: string | Array<string>;
  data: any;
} 