// # Lógica de negocio para pets
import { Request, Response } from "express";
import { CreatePet } from "../../../domain/usecases/CreatePet";

// Simula una base de datos con datos de mascotas
// const petRepository = new PetRepositoryMemory();
// const getAllPetsUseCase = new GetAllPets(petRepository);

// export const getAllPets = (req, res) => {
//   const pets = getAllPetsUseCase.execute();
//   res.json(pets);
// };

export class PetController {
  constructor(private createPetUseCase: CreatePet) {}

  async handleCreate(req: Request, res: Response) {
    const { name, species, breed, age } = req.body
    const pet = await this.createPetUseCase.execute(name, species, breed, age);
    res.status(201).json(pet)
  }
}
