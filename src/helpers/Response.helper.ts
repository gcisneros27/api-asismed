import { Response, Request } from "express";
import { IResponse } from "../interfaces/IResponse";
import { AppClientErrors, AppServerErrors } from "../interfaces/IErrores";

class CustomResponse {
  response: IResponse;

  constructor() {
    this.response = {
      success: false,
      httpStatusCode: 0,
      appStatusCode: 0,
      messages: [],
      data: {},
    };
  }

  Ok(res: Response, message: string, appCode: number = 200, data: any = {}) {
    try {
      this.response.success = true;
      this.response.httpStatusCode = 200;
      this.response.appStatusCode = appCode;
      this.response.messages=[message];
      this.response.data = data;
      res.status(this.response.httpStatusCode).json(this.response);
    } catch (error) {
      throw error;
    }
  }

  Eliminado(res: Response, message: string) {
    try {
      this.response.success = true;
      this.response.httpStatusCode = 204;
      this.response.appStatusCode = 2004;
      this.response.messages=[message];
      res.status(this.response.httpStatusCode).json(this.response);
    } catch (error) {
      throw error;
    }
  }

  Created(
    res: Response,
    message: string,
    appCode: number = 201,
    data: any = {}
  ) {
    try {
      this.response.success = true;
      this.response.httpStatusCode = 201;
      this.response.appStatusCode = appCode;
      this.response.messages = [message];
      this.response.data = data;
      res.status(this.response.httpStatusCode).json(this.response);
    } catch (error) {
      throw error;
    }
  }

  ValidationError(res: Response, messages: Array<string>, error: any) {
    try {
      this.response.success = false;
      this.response.httpStatusCode = 400;
      this.response.messages = messages;
      this.response.appStatusCode = AppClientErrors.validationError;
      this.response.data = error;
      res.status(this.response.httpStatusCode).json(this.response);
    } catch (err) {
      throw err;
    }
  }

  NotFound(res: Response, message: string) {
    try {
      this.response.success = true;
      this.response.httpStatusCode = 404;
      this.response.appStatusCode = 4004;
      this.response.messages=[message];
      res.status(this.response.httpStatusCode).json(this.response);
    } catch (error) {
      throw error;
    }
  }

  Error(res: Response, error: any) {
    try {
      this.response.success = false;
      this.response.httpStatusCode = 500;
      this.response.messages = ["Ocurrio un error"];
      this.response.appStatusCode = AppServerErrors.errorInterno;
      this.response.data = error;
      res.status(this.response.httpStatusCode).json(this.response);
    } catch (err) {
      throw err;
    }
  }
}

export const customResponse = new CustomResponse();
