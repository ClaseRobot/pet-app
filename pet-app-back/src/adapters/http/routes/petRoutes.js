//  # Definición de los endpoints de la API
import { Router } from 'express';
import { getAllPets } from '../controllers/PetController.js';

const router = Router();

// Define GET route for '/pets'
router.get('/pets', getAllPets);

// Exporto el router para que pueda ser usado en server.js
export default router;
