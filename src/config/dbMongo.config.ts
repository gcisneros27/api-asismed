import mongoose from "mongoose";

export const mongoConnection=async()=>{

    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(`mongodb+srv://${process.env.DB_MONGO_USER}:${process.env.DB_MONGO_PASSWORD}@${process.env.DB_MONGO_HOST}/${process.env.DB_MONGO_DATABASE}`)
        console.log('Base de datos Mongo online')
    } catch (error) {
        console.error(error)
        throw new Error('Error de conexion a la base de datos')
    }


}