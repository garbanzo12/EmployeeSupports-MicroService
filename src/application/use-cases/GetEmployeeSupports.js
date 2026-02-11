//Caso de uso de obtener todas los CecoName
export class GetEmployeeSupports {
  constructor(EmployeeSupportsRepositoryFindAll) {
    this.EmployeeSupportsRepositoryFindAll = EmployeeSupportsRepositoryFindAll;
  }

  async execute() {
    return await this.EmployeeSupportsRepositoryFindAll.findAll();
  }
}
