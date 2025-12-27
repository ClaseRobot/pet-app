// # Lógica de negocio para pets

// Simula una base de datos con datos de mascotas
const petsData = [
  { id: 1, name: 'Manuel', species: 'Dog', breed: 'Golden Retriever', age: 3 },
  { id: 2, name: 'Cornelio', species: 'Cat', breed: 'Siamese', age: 5 },
  { id: 3, name: 'Julio', species: 'Fish', breed: 'Apistograma', age: 10 },
  { id: 4, name: 'Argentino', species: 'Alien', breed: 'Reptiliano', age: 99 },
];

export const getAllPets = (req, res) => {
  res.json(petsData)
}