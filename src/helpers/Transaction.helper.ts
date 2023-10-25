import { v4 as uuidv4 } from 'uuid';
const colors = require('colors');
export class Transaction {
    transactionId:string;
    path:string;
    level:number;
    private symbol:string;

    constructor(req:any){
        this.transactionId=uuidv4()
        this.path=req.baseUrl
        this.level=0
        this.symbol=`├`
        this.log(`Transaction PATH: ${colors.cyan(this.path)} - ID:`+colors.magenta(` ${this.ID}`))
    }

    get ID(){
        return this.transactionId
    }
    

    log(message:string,data:any=undefined){
        if(data)console.log(colors.green(`${this.symbol} ${new Date().toISOString()}:  `) +`${message}`,data)
        else console.log(colors.green(`${this.symbol} ${new Date().toISOString()}:  `) +`${message}`)
        
    }

    http(url:string,data:any=undefined){
        if(data)console.log(colors.green(`├ ${new Date().toISOString()}:  `) +colors.cyan(`${url}`),data)
        else console.log(colors.green(`├ ${new Date().toISOString()}:  `) + colors.cyan(`${url}`))
    }
}