import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Body, Put, Delete } from "@nestjs/common";
import { ProdutoService } from "../services/produto.service";
import { Produto } from "../entities/produto.entity";

@Controller(`/produtos`)
export class ProdutoController {
  constructor(private readonly ProdutoService: ProdutoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Produto[]> {
    return this.ProdutoService.findAll();
  }

  @Get(`/:id`)
  @HttpCode(HttpStatus.OK)
  findById(@Param(`id`, ParseIntPipe) id: number): Promise<Produto> {
    return this.ProdutoService.findById(id);
  }

  @Get(`/nome/:nome`)
  @HttpCode(HttpStatus.OK)
  findAllByTitulo(@Param(`nome`) nome: string): Promise<Produto[]> {
    return this.ProdutoService.findAllByName(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() produto: Produto): Promise<Produto> {
    return this.ProdutoService.create(produto);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() produto: Produto): Promise<Produto> {
    return this.ProdutoService.update(produto);
  }

  @Delete(`/:id`)
  @HttpCode(HttpStatus.OK)
  delete(@Param(`id`, ParseIntPipe) id: number) {
    return this.ProdutoService.delete(id);
  }
}