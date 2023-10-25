import { ICliente } from '../interfaces/ICliente';
import { Cliente } from '../models/Clientes';
import { v4 as uuidv4 } from 'uuid';
import { Transaction } from '../helpers/Transaction.helper';
import { ITransaction } from '../types/ITransaction.type';



export const findAllClientes=async(query:any={},select:any={})=>{
    try {
        const clientes = await Cliente.find(query,select);
        return clientes
    } catch (error) {
        console.error('░░░ DAO ░░░', error)
        throw error 
    }
}

export const findCliente=async(id:string)=>{
    try {
        const cliente = await Cliente.findById(id);
        return cliente
    } catch (error) {
        console.error('░░░ DAO ░░░', error)
        throw error 
    }
}

export const crearCliente=(cliente:ICliente,transaction:ITransaction)=>{
    try {
        const clienteCreado= new Cliente(cliente)
        clienteCreado.codigo=uuidv4()
        clienteCreado._transaction=transaction.ID
        const error=clienteCreado.validateSync()
        if(error){
            throw new Error(error.message)
        }
        clienteCreado.save()
        return clienteCreado    
    } catch (error) {
        console.error('░░░ DAO ░░░', error)
        throw error    
    }
}

export const modificarCliente=async (id:string,update:object)=>{
    try {
        const body={
            ...update,
            updated:new Date()
        }
        const cliente = await Cliente.findByIdAndUpdate(id, body, { new: true });
        return cliente    
    } catch (error) {
        console.error(error)
        throw error    
    }
}

export const deleteCliente=async(id:string)=>{
    const cliente = await Cliente.findByIdAndUpdate(
        id,
        { activo: false },
        { new: true }
      );
    if (cliente) return true
    throw 'No se encontro el cliente'
}