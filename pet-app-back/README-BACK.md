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