// # Lógica de negocio para pets

// Simula una base de datos con datos de mascotas
const petsData = [
  { id: 1, name: 'Buddy', species: 'Dog', breed: 'Golden Retriever', age: 3 },
  { id: 2, name: 'Whiskers', species: 'Cat', breed: 'Siamese', age: 5 },
];

export const getAllPets = (req, res) => {
  res.json(petsData)
}