var bcrypt = require('bcryptjs');
export const encryptPassword=(plainPassword:string)=>{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(plainPassword, salt);
    return hash
}

export const validatePassword=(plainPassword:string)=>{

    


}