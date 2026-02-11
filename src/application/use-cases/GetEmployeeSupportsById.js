//Caso de uso de obtener un cecoName por su Id
export class GetEmployeeSupportsById {
  constructor(EmployeeSupportsRepositoryById) {
    this.EmployeeSupportsRepositoryById = EmployeeSupportsRepositoryById;
  }

  async execute(id) {
    return await this.EmployeeSupportsRepositoryById.findById(id);
  }
}