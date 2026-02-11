# EmployeeSupports-service
Este es un microservicio de EmployeeSupports para DBGERH_Talent


# Pasos para levantar el proyecto
npm i

npm run build

npm start

# Crea un archivo .env en la raíz del proyecto basándote en la siguiente plantilla:
PORT=3005
DB_SERVER=tu_server
DB_DATABASE=DBGERH_Talent
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_DOMAIN=tu_dominio


# En caso de algun error verificar las dependencias instaladas
npm install dotenv express msnodesqlv8 mssql reflect-metadata morgan

# El proyecto usa decorators, por tanto se usa babel decorators
npm install -D @babel/cli @babel/core @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators @babel/preset-env @babel/plugin-transform-private-methods nodemon 




# Estructura de las carpetas
EMPLOYEESUPPORTS-MICROSERVICE
│
├── dist/
├── node_modules/
│
├── src/
│   │
│   ├── application/
│   │   └── use-cases/
│   │       ├── GetEmployeeSupports.js
│   │       └── GetEmployeeSupportsById.js
│   │
│   ├── domain/
│   │   ├── entities/
│   │   │   └── EmployeeSupport.js
│   │   │
│   │   └── repositories/
│   │       └── EmployeeSupportRepository.js
│   │
│   ├── infrastructure/
│   │   ├── database/
│   │   │   └── typeorm/
│   │   │       ├── entities/
│   │   │       │   └── EmployeeSupportsEntity.js
│   │   │       │
│   │   │       └── repositories/
│   │   │           └── EmployeeSupportRepositoryImpl.js
│   │   │
│   │   └── mssql-pool.js
│   │
│   ├── http/
│   │   └── controllers/
│   │       └── EmployeeSupportsController.js
│   │
│   ├── shared/
│   │   └── config/
│   │       └── index.js
│   │
│   └── main.js
│
├── .env
├── .gitattributes
├── .gitignore
├── babel.config.js
├── package-lock.json
├── package.json
├── README.md
└── test-conection.js
