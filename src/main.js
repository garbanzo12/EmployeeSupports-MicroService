import 'reflect-metadata';
import dotenv from 'dotenv';
import morgan from 'morgan';
dotenv.config();

import express from 'express';
import { poolPromise } from './infrastructure/database/typeorm/mssql-pool.js';
import { EmployeeSupportRepositoryImpl } from './infrastructure/database/typeorm/repositories/EmployeeSupportRepositoryImpl.js';
import { GetEmployeeSupports } from './application/use-cases/GetEmployeeSupports.js';
import { GetEmployeeSupportsById } from './application/use-cases/GetEmployeeSupportsById.js';
import {EmployeeSupportsController} from './infrastructure/http/controllers/EmployeeSupportsController.js'
const app = express();
app.use(express.json());
// app.use(morgan('dev')); <-- Usar morgan en caso de necesitar observar los tiempos de respuesta, en controllers ya se imprimen respuestas de petición
const pool = await poolPromise; // Conexion a la pool mssql  

const repo = new EmployeeSupportRepositoryImpl(pool);
const getEmployeeSupportsUseCase = new GetEmployeeSupports(repo);
const getEmployeeSupportsByIdUseCase = new GetEmployeeSupportsById(repo);
const employeeSupportsController = new EmployeeSupportsController(getEmployeeSupportsUseCase, getEmployeeSupportsByIdUseCase);

//Endpoints de companies 
app.get('/employeesupport', (req, res) => employeeSupportsController.getAll(req, res));
app.get('/employeesupport/:id', (req, res) => employeeSupportsController.getById(req, res));

app.listen(3005, () => {
    console.log('🚀 Microservicio de Compañías (ODBC Nativo) en puerto 3005');
});