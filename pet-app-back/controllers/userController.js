// # Lógica de negocio para usuarios
// type Mascota = {
//   nombre: string;
//   edad: number;
//   raza: string;
//   vacunas: string[];
//   sexo: "Macho" | "Hembra";
//   color: string;
//   comidaFavorita: string;
//   atuendoFavorito: string;
// };

// type Usuario = {
//   id: number;
//   email: string;
//   alias: string;
//   lugarDeResidencia: string;
//   heladoFavorito: string;
//   mascotas: Mascota[];
// };

const usuarios = [
  {
    id: 1,
    email: "carla.perez@example.com",
    alias: "CarlaPetLover",
    lugarDeResidencia: "Buenos Aires, Argentina",
    heladoFavorito: "Dulce de Leche",
    mascotas: [
      {
        nombre: "Max",
        edad: 3,
        raza: "Golden Retriever",
        vacunas: ["Rabia", "Parvovirus"],
        sexo: "Macho",
        color: "Dorado",
        comidaFavorita: "Galletas de avena",
        atuendoFavorito: "Bandana roja",
      },
      {
        nombre: "Luna",
        edad: 1,
        raza: "Gato Siamés",
        vacunas: ["Triple felina"],
        sexo: "Hembra",
        color: "Crema y marrón",
        comidaFavorita: "Pescado",
        atuendoFavorito: "Collar con cascabel",
      },
      {
        nombre: "Rocky",
        edad: 5,
        raza: "Pastor Alemán",
        vacunas: ["Rabia", "Distemper"],
        sexo: "Macho",
        color: "Negro y marrón",
        comidaFavorita: "Carne cruda",
        atuendoFavorito: "Abrigo de invierno",
      },
    ],
  },
];

console.log(usuarios);


export const getUser = (req, res) => {
  res.json(usuarios);
}