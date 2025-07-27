import { IsNotEmpty, IsPositive } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";

@Entity({ name: `tb_produtos` })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 500, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  descricao: string;

  @IsNotEmpty()
  @Column({ length: 500, nullable: false })
  genero: string;

  @IsNotEmpty()
  @IsPositive()
  @Column('decimal', { precision: 19, scale: 2 })
  preco: number;

  @ManyToOne(() => Categoria,(categoria) => categoria.produto,{
    onDelete:'CASCADE'
  })
  categoria: Categoria
}
