export class GetAllPets {
  constructor(petRepository) {
    this.petRepository = petRepository;
  }

  execute() {
    return this.petRepository.findAll();
  }
}
