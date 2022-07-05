/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
@Controller('cadastro/pessoas')
export class PessoasController {
  @Get()
  todosUsuarios(): string {
    return 'Mostra todos usuarios';
  }

  @Post()
  cadastro(@Body() pessoas): string {
    return `novo criar cadastro ${pessoas}`
  }

  @Put()
  editar(@Body() pessoas): string {
    return `editar cadastro ${pessoas   }`
  }

  @Delete(':id')
  delete(@Param() pessoas): string {
    return `Deletar do banco ${pessoas.id}`
  }
}
