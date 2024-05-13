import { validationResult } from 'express-validator';
import Produto from '../models/produto.model.js';

function validaCampos(){
  const errors = validationResult(req) //Faz a validação dos campos
    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() })
    }
}

export default class ProdutoController{
  static async index(req, res){
    const produtos = await Produto.findMany()
    res.json(produtos)
  }

  static async create(req, res){
    validaCampos();

    const produto = await Produto.create({
      data: req.body
    })
    res.json(produto)
  }

  static async show(req, res){ //Método para buscar um produto pelo id
    const errors = validationResult(req) //Se mudo aqui da erro
    if(!errors.isEmpty()){              //não sei porque
      return res.status(400).json({ errors: errors.array() })
    }

    const produto = await Produto.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if(!produto){
      return res.status(404).json({ message: 'Produto não encontrado' })
    }
    res.json(produto)
  }

  static async update(req, res){
    validaCampos();

    const produto = await Produto.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if(!produto){
      return res.status(404).json({ message: 'Produto não encontrado' })
    }

    const updatedProduto = await Produto.update({
      where: {
        id: parseInt(req.params.id)
      },
      data: req.body
    })
    res.json(updatedProduto)
  }

  static async delete(req, res){
    const errors = validationResult(req) //Faz a validação dos campos
    if(!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() })
    }

    const produto = await Produto.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if(!produto){
      return res.status(404).json({ message: 'Produto não encontrado' })
    }

    await Produto.delete({
      where: {
        id: parseInt(req.params.id)
      }
    })
    res.json({ message: 'Produto removido com sucesso' })
  }
}