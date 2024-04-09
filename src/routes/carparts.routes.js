import { Router } from "express";
import { 
    getAll, 
    getOne, 
    insertOne,
    updateOne,
    deleteOne
} from "../controllers/carparts.controller.js";

const router = Router();

// Ruta para obtener todas las partes de carros
router.get('/', getAll);

// Ruta para obtener una sola parte de carro por número de parte
router.get('/:partNumber', getOne);

// Ruta para insertar una parte de carro
router.post('/', insertOne);

// Ruta para actualizar una parte de carro
router.put("/:partNumber", updateOne);

// Ruta para eliminar una parte de carro
router.delete("/:partNumber", deleteOne);



export default router;
