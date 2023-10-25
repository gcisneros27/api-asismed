import { Response, Request } from "express";
import { IResponse } from "../interfaces/IResponse";
import { AppClientErrors, AppServerErrors } from "../interfaces/IErrores";

class CustomResponse {

  response: IResponse;

  constructor() {
    this.response = {
      success: false,
      appStatusCode: 0,
      messages: '',
      data: {},
    };
  }

private getHttpCodes(appCode:number) {
switch (appCode) {

  default:
    return appCode
    break;
}


}

  Send(res: Response,success:boolean,message: string, appCode: number = 200, data: any = {}) {
    try {
      this.response.success = success;
      this.response.appStatusCode = appCode;
      this.response.messages=message;
      this.response.data = data;
      res.status(this.getHttpCodes(appCode)).json(this.response);
    } catch (error) {
      throw error;
    }
  }


  ValidationError(res: Response, messages: Array<string>, error: any) {
    try {
      this.response.success = false;

      this.response.messages = messages;
      this.response.appStatusCode = AppClientErrors.validationError;
      this.response.data = error;
      res.status(400).json(this.response);
    } catch (err) {
      throw err;
    }
  }

  Error(res: Response,message:string|Array<string> , error: any) {
    try {
      this.response.success = false;
      this.response.messages = message
      this.response.appStatusCode = AppServerErrors.errorInterno;
      this.response.data = error;
      res.status(500).json(this.response);
    } catch (err) {
      throw err;
    }
  }
}

export const customResponse = new CustomResponse();
