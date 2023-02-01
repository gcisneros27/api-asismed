const dotenv = require('dotenv')
dotenv.config()
import Server from './src/models/Server'

const server= new Server()

server.listen()