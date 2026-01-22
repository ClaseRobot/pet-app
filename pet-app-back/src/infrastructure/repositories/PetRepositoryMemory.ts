import { Pet } from "../../domain/entities/Pet";
import { PetRepository } from "../../domain/ports/PetRepository";

export class PetRepositoryMemory implements PetRepository {

  private pets: Pet[] = [
    { id: '1', name: 'Buddy', species: 'Dog', breed: 'Golden Retriever', age: 3 },
    { id: '2', name: 'Whiskers', species: 'Cat', breed: 'Siamese', age: 5 },
  ];

  async save(pet: Pet): Promise<void> {
    this.pets.push(pet)
  }

  async findAll(): Promise<Pet[]> {
    return this.pets;
  }
}
