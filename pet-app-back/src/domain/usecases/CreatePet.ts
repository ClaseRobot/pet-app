import { Pet } from "../entities/Pet"
import { PetRepository} from "../ports/PetRepository"

export class CreatePet {
  constructor(private petRepository: PetRepository) { }

  async execute( name: string, species: string, breed: string, age: number ): Promise<Pet>  { // reducir la cantidad de parametros
    const newPet = new Pet(crypto.randomUUID(), name, species, breed, age);
    await this.petRepository.save(newPet);
    return newPet;
  }
}