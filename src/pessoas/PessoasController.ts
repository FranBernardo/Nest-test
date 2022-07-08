/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PessoaService } from './Pessoa.service';
import { Pessoa } from './Pessoa.model';
@Controller('cadastro/pessoas')
export class PessoasController {
  constructor(private pessoaService: PessoaService){

  }

  @Get()
  TodosUsuarios(): Pessoa[] {
    return this.pessoaService.TodosUsuarios();
  }

  @Get(':id') 
  UmUsuario(@Param() pessoas): Pessoa {
    return this.pessoaService.UmUsuario(pessoas.id)
  }

  @Post()
  Cadastro(@Body() pessoas: Pessoa) {
    this.pessoaService.Criar(pessoas)
    return 'salvo com sucesso'
  }

  @Put()
  Editar(@Body() pessoas: Pessoa): Pessoa {
    return this.pessoaService.Editar(pessoas)
  }

  @Delete(':id')
  Delete(@Param() pessoas){
    return this.pessoaService.Deletar(pessoas.id)
  }
}
