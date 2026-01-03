const PetModel = require('../db/mongoose/PetModel');

class PetRepositoryMongo {
  async save(pet) {
    return PetModel.create(pet);
  }

  async findAll() {
    return PetModel.find();
  }
}

module.exports = PetRepositoryMongo;
