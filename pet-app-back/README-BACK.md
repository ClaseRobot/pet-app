### Estructura del Backend
mi-app-mascotas/
├── node_modules/             # Módulos de Node.js instalados por npm
├── .env                      # Variables de entorno (claves de API, conexión a DB)
├── package.json              # Metadatos del proyecto y dependencias
├── server.js                 # Archivo principal para iniciar el servidor
│
├── config/                   # Archivos de configuración
│   ├── db.js                 # Conexión a la base de datos
│   └── secrets.js            # Claves para servicios externos (si no usas .env)
│
├── controllers/              # Lógica de negocio para cada ruta
│   ├── petController.js
│   ├── tipsController.js
│   └── userController.js
│
├── models/                   # Definición de los esquemas de la base de datos
│   ├── Pet.js
│   └── User.js
│
├── routes/                   # Definición de los endpoints de la API
│   ├── petRoutes.js
│   ├── tipsRoutes.js
│   └── userRoutes.js
│
└── services/                 # Lógica compleja y reutilizable
    ├── tipsGeneratorService.js
    └── nearbyService.js

### Estructura del Backend Hexagonal
mi-app-mascotas/
├── node_modules/
├── .env
├── package.json
├── server.js                # Bootstrap (Express, middlewares, DI)
│
├── src/
│   ├── domain/              # 🧠 Núcleo del negocio (NO frameworks)
│   │   ├── entities/        # Entidades del dominio
│   │   │   ├── Pet.js
│   │   │   └── User.js
│   │   │
│   │   ├── usecases/        # Casos de uso (reglas de negocio)
│   │   │   ├── CreatePet.js
│   │   │   ├── GetPets.js
│   │   │   ├── GenerateTips.js
│   │   │   └── RegisterUser.js
│   │   │
│   │   └── ports/           # Interfaces (puertos)
│   │       ├── PetRepository.js
│   │       ├── UserRepository.js
│   │       ├── TipsProvider.js
│   │       └── NearbyServicePort.js
│   │
│   ├── adapters/            # 🔌 Entradas (HTTP, CLI, eventos)
│   │   └── http/
│   │       ├── controllers/
│   │       │   ├── PetController.js
│   │       │   ├── TipsController.js
│   │       │   └── UserController.js
│   │       │
│   │       └── routes/
│   │           ├── petRoutes.js
│   │           ├── tipsRoutes.js
│   │           └── userRoutes.js
│   │
│   ├── infrastructure/      # 🏗️ Detalles técnicos
│   │   ├── db/
│   │   │   └── mongoose/
│   │   │       ├── PetModel.js
│   │   │       └── UserModel.js
│   │   │
│   │   ├── repositories/    # Adaptadores a DB
│   │   │   ├── PetRepositoryMongo.js
│   │   │   └── UserRepositoryMongo.js
│   │   │
│   │   └── external/        # APIs externas / servicios
│   │       ├── TipsGeneratorService.js
│   │       └── NearbyService.js
│   │
│   └── config/              # Configuración técnica
│       ├── db.js
│       └── secrets.js
│
└── README-BACK.md