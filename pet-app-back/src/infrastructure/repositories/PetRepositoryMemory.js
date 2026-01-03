export class PetRepositoryMemory {
  constructor() {
    this.pets = [
      { id: 1, name: 'Buddy', species: 'Dog', breed: 'Golden Retriever', age: 3 },
      { id: 2, name: 'Whiskers', species: 'Cat', breed: 'Siamese', age: 5 },
    ];
  }

  findAll() {
    return this.pets;
  }
}
