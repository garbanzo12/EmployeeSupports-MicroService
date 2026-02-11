import { Entity, Column, PrimaryColumn } from 'typeorm';

// Se especifica la tabla con la que se va a trabajar (CecoName) del schema dbo
@Entity({ name: 'EmployeeSupports', schema: 'dbo' })
export class EmployeeSupportsEntity {
  @PrimaryColumn({ type: 'int' })
  Id;

  @Column({ type: 'int' })
  EmployeeId;

  @Column({ type: 'int' })
  IdEmployeeContracts;

  @Column({ type: 'int' })
  TypeDocumentsId;

  @Column({ type: "datetime" })
  CreateAt;

  @Column({ type: "int" })
  UsuarId;

  @Column({ type: 'nvarchar', length: 255 })
  DocumentName;

  @Column({ type: 'nvarchar', length: 10 })
  StorageSite;
}