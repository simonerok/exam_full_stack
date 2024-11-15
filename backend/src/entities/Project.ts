import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

// This class defines the Project entity for TypeORM, which maps to the 'projects' table in the database.
@Entity("projects")
export class Project {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id!: number;

  @Column("varchar", { name: "name", length: 255 })
  name!: string;

  @Column({ nullable: true })
  description?: string;

  @Column("varchar", { name: "img_url", nullable: true, length: 255 })
  image_url!: string | null;
}
