// # Lógica de negocio para pets
import { GetAllPets } from '../../../domain/usecases/GetAllPets.js';
import { PetRepositoryMemory } from '../../../infrastructure/repositories/PetRepositoryMemory.js';

// Simula una base de datos con datos de mascotas
const petRepository = new PetRepositoryMemory();
const getAllPetsUseCase = new GetAllPets(petRepository);

export const getAllPets = (req, res) => {
  const pets = getAllPetsUseCase.execute();
  res.json(pets);
};
