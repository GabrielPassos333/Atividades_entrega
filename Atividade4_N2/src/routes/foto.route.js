import{ Router } from 'express'
import FotoController from '../controllers/foto.controller.js'
import { fotoValidator, fotoUpdateValidator, fotoIdValidator } from '../validator/foto.validator.js'

const router = Router();

router.get('/', FotoController.index);
router.post('/', fotoValidator, FotoController.create); //id pois foi o que configurei na rota
// router.get('/:id', FotoIdValidator, FotoController.show); //Rota para buscar um Foto pelo id
// router.put('/:id', FotoUpdateValidator, FotoController.update); //Rota para atualizar um Foto
// router.delete('/:id', FotoIdValidator, FotoController.delete); //Rota para deletar um Foto

export default router;