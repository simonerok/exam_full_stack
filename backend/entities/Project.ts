import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
