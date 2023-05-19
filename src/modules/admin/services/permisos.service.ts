import { Permiso } from "../../../models/Permisos"

export const checkUniquePath= async (method:string,path:string) => {

    try {
        const permiso=await Permiso.find({metodo:method,path:path,activo:true})
        if(permiso.length>0) return false
        return true
        
    } catch (error) {
        console.log(error)
        return false
        
    }

    
}