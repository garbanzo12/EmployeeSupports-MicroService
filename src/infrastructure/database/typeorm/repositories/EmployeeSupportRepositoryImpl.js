import { EmployeeSupport } from "../../../../domain/entities/EmployeeSupport.js";

export class EmployeeSupportRepositoryImpl {
  constructor(pool) {
    this.pool = pool;
  }

  // 🔥 Traer todos los documentos
  async findAll() {
    const result = await this.pool.request().query(`
      SELECT 
        id,
        EmployeeId,
        IdEmployeeContracts,
        TypeDocumentsId,
        CreateAt,
        UsuarId,
        DocumentName,
        StorageSite
      FROM dbo.EmployeeSupports
    `);

    // Mapeo de la respuesta
    return result.recordset.map(
      row =>
        new EmployeeSupport({
          id: row.id,
          EmployeeId: row.EmployeeId,
          IdEmployeeContracts: row.IdEmployeeContracts,
          TypeDocumentsId: row.TypeDocumentsId,
          CreateAt: row.CreateAt,
          UsuarId: row.UsuarId,
          DocumentName: row.DocumentName,
          StorageSite: row.StorageSite
        })
    );
  }

  // 🔍 Buscar por id
  async findById(id) {
    const result = await this.pool
      .request()
      .input("id", id)
      .query(`
        SELECT 
          id,
          EmployeeId,
          IdEmployeeContracts,
          TypeDocumentsId,
          CreateAt,
          UsuarId,
          DocumentName,
          StorageSite
        FROM dbo.EmployeeSupports
        WHERE id = @id
      `);

    if (result.recordset.length === 0) return null;

    const row = result.recordset[0];

    return new EmployeeSupport({
      id: row.id,
      EmployeeId: row.EmployeeId,
      IdEmployeeContracts: row.IdEmployeeContracts,
      TypeDocumentsId: row.TypeDocumentsId,
      CreateAt: row.CreateAt,
      UsuarId: row.UsuarId,
      DocumentName: row.DocumentName,
      StorageSite: row.StorageSite
    });
  }
}
