import pc from 'picocolors'; // Esta es una librería ligera de colores para colorear los codigos de respuesta (200, 400, etc)

export class EmployeeSupportsController {
  constructor(getEmployeeSupportsUseCase, getEmployeeSupportsByIdUseCase) {
    this.getEmployeeSupportsUseCase = getEmployeeSupportsUseCase;
    this.getEmployeeSupportsByIdUseCase = getEmployeeSupportsByIdUseCase;
  }

  // Este es un helper para centralizar el formato del log
  #log(type, message, data = '') {
    const time = new Date().toLocaleTimeString();
    const icons = { success: '✅', error: '❌', info: 'ℹ️' }; // Iconos para exito (✅), error (❌) e info (ℹ️)
    const colors = { success: pc.green, error: pc.red, info: pc.blue }; // Los colores son verdes(200), para petición exitosa, rojo para petición fallida(400-500), azul para info (100)
    
    console.log(
      `${pc.gray(`[${time}]`)} ${colors[type](icons[type])} ${pc.bold(message)}`,
      data ? pc.dim(JSON.stringify(data)) : '' // La salida del log se veria asi ([hora] [icono] [Tipo petición] [endpoint] - [Respuesta] )
    );
  } /* Ejemplos de este log
      ([hora] [icono] [Tipo petición] [endpoint] - [Respuesta] )
      [8:20:31 a. m.] ✅ GET /employeesupport - Petición exitosa {"count":1410}
      [8:20:41 a. m.] ✅ GET /employeesupport/1 - Petición exitosa 
      [8:21:32 a. m.] ❌ GET /employeesupport/0 - No encontrado 
  */
  
  getAll = async (req, res) => {
    try {
      const employeesupports = await this.getEmployeeSupportsUseCase.execute();
      
      if (!employeesupports || employeesupports.length === 0) {
        this.#log('error', 'GET /employeesupport - No se encontraron registros');
        return res.status(404).json({ message: "employeesupports not found" });
      }

      this.#log('success', 'GET /employeesupport - Petición exitosa', { count: employeesupports.length });
      res.json(employeesupports);
    } catch (error) {
      this.#log('error', 'GET /employeesupport - Error crítico', error.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  getById = async (req, res) => {
    const { id } = req.params;
    try {
      const employeesupport = await this.getEmployeeSupportsByIdUseCase.execute(id);

      if (!employeesupport) {
        this.#log('error', `GET /employeesupport/${id} - No encontrado`);
        return res.status(404).json({ message: "employeesupport not found" });
      }

      this.#log('success', `GET /employeesupport/${id} - Petición exitosa`);
      res.json(employeesupport);
    } catch (error) {
      this.#log('error', `GET /employeesupport/${id} - Error`, error.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}