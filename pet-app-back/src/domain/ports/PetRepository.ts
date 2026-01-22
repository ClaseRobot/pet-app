import { Pet } from "../entities/Pet"

export interface PetRepository {
  save(pet: Pet): Promise<void>;
  findAll(): Promise<Pet[]>;
}
