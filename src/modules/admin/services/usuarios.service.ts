import { IUsuario } from "../../../interfaces/IUsuario";
import { Cliente } from "../../../models/Clientes";
import { Usuario } from "../../../models/Usuarios";
import { IResponseService } from "../../../types/IResponseServices.type";
import { encryptPassword } from "../helpers/passwords.helper";

export const crearUsuario = async (
  datosUsuario: IUsuario
): Promise<IResponseService> => {
  try {
    //
    const usuarioDB = await Usuario.findOne({
      username: datosUsuario.username,
    });
    if (usuarioDB) {
      return {
        success: false,
        message: `El username ${usuarioDB.username} ya existe`,
        data: {},
      };
    }
    //Buscar cliente
    const cliente = await Cliente.findOne({
      _codigo_cliente: datosUsuario._codigo_cliente,
    });
    if (cliente) {
      datosUsuario._codigo_cliente = cliente.codigo;
      datosUsuario._cliente = cliente._id;
      const pass = encryptPassword(datosUsuario.password);
      datosUsuario.password = pass;
      const usuario = new Usuario(datosUsuario);
      usuario.save();
      return {
        success: true,
        message: `Usuario creado exitosamente`,
        data: usuario,
      };
    } else
      return {
        success: false,
        message: "No se encontro el el codigo de cliente",
        data: {},
      };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Ocurrio un error al crear usuario",
      data: error,
    };
  }
};

export const modificarUsuario = async (
  datosUsuario: IUsuario,
  idUsuario: string
): Promise<IResponseService> => {
  const usuarioDB = await Usuario.findById(idUsuario);
  if (!usuarioDB) {
    return {
      success: false,
      message: `El usuario con ID ${idUsuario}`,
      data: {},
    };
  }

    




  return {
    success: false,
    message: "Ocurrio un error al crear usuario",
    data: {},
  };
};
