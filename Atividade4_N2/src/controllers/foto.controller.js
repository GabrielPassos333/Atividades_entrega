import { validationResult } from 'express-validator';
import Foto from '../models/foto.model.js';

// function validaCampos(){
//   const errors = validationResult(req) //Faz a validação dos campos
//     if(!errors.isEmpty()){
//       return res.status(400).json({ errors: errors.array() })
//     }
// }

export default class FotoController{
  static async index(req, res){
    const fotos = await Foto.findMany({
      include: { //remover se começar a dar erro
        produto: true //coloquei o include, agora aparece
      }
    })
    res.json(fotos)
  }

  static async create(req, res){
    const errors = validationResult(req) //Faz a validação dos campos
    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() })
    }

    const foto = await Foto.create({ //se validou, cria a foto
      data: req.body
    })
    res.json(foto)
  }
}
