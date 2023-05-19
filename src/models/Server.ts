import { mongoConnection } from "../config/dbMongo.config";
import { errorHandler } from "../middlewares/errorHandler.middleware";
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require('method-override')
const cors = require("cors");
const os = require("os");
const hostname = os.hostname();
import routes from "../routes/index.routes";
export default class Server {
  app: any;
  port: any;

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.conectDbMongo();
    this.middleware();
    this.routes();
    this.errorHandling()
  }

  routes() {
    this.app.use(routes);
  }
  async conectDbMongo() {
    await mongoConnection();
  }
  middleware() {
    this.app.use(cors());
    // parse application/x-www-form-urlencoded
    this.app.use(bodyParser.urlencoded({ extended: false }));
    // parse application/json
    this.app.use(bodyParser.json());
  }
  errorHandling(){
    this.app.use(errorHandler)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App cooriendo en http://localhost:${this.port}`);
    });
  }
}
