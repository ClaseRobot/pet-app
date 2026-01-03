class Pet {
  constructor({ name, type }) {
    if (!name) throw new Error('Pet name is required');
    this.name = name;
    this.type = type;
  }
}

module.exports = Pet;
