export class UserRepositoryMemory {
  constructor() {
    this.usuarios = [
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
          }
        ]
      }
    ];
  }

  findAll() {
    return this.usuarios;
  }
}
