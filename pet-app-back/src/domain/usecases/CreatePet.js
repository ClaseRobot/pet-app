class CreatePet {
  constructor(petRepository) {
    this.petRepository = petRepository;
  }

  async execute(data) {
    return this.petRepository.save(data);
  }
}

module.exports = CreatePet;
