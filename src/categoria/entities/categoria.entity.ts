import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from '../../produto/entities/produto.entity';

@Entity({ name: `tb_categorias` })
export class Categoria {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @Column({length: 255, nullable:false})
  console: string;

  @ApiProperty({ type: () => Produto })
  @OneToMany(()=>Produto, (produto)=>produto.categoria)
  produto: Produto[]
}
