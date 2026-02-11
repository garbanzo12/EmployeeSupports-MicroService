//Logica de negocio
export class EmployeeSupport {
  constructor({
    id,EmployeeId,IdEmployeeContracts,TypeDocumentsId,CreateAt,UsuarId,DocumentName, StorageSite
  }) {
    this.id = id;
    this.EmployeeId = EmployeeId;
    this.IdEmployeeContracts = IdEmployeeContracts;
    this.TypeDocumentsId = TypeDocumentsId;
    this.CreateAt = CreateAt;
    this.UsuarId = UsuarId;
    this.DocumentName = DocumentName;
    this.StorageSite = StorageSite;
  }
}
