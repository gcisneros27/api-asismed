import { mongoConnection } from '../config/dbMongo.config';
const express = require('express')
const cors = require('cors')
const os = require("os");
const hostname = os.hostname();

export default class Server {
    app: any
    port: any

    constructor(){
        this.app=express()
        this.port = process.env.PORT
        this.conectDbMongo()
        this.middleware()
        this.routes()
    }

  routes(){

  }  
  async conectDbMongo(){
    await mongoConnection()
  }
  middleware(){
    this.app.use(cors())

  }

  listen(){
    this.app.listen(this.port, () => {
        console.log(`App cooriendo en http://localhost:${this.port}`)
      })
  }
}
