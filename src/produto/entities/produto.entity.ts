import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";



@Entity({ name: `tb_produtos` })
export class Produto {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;


  @ApiProperty()
  @IsNotEmpty()
  @Column({ length: 500, nullable: false })
  nome: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  descricao: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({ length: 500, nullable: false })
  genero: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsPositive()
  @Column('decimal', { precision: 19, scale: 2 })
  preco: number;

  @ApiProperty({ type: () => Categoria })
  @ManyToOne(() => Categoria,(categoria) => categoria.produto,{
    onDelete:'CASCADE'
  })
  categoria: Categoria
}
