/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PessoaService } from './Pessoa.service';
import { Pessoas } from './schemas/pessoa.schema';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
@Controller('cadastro/pessoas')
export class PessoasController {
  constructor(private pessoaService: PessoaService){

  }

  @Get()
  async TodosUsuarios(): Promise<Pessoas[]> {
    return this.pessoaService.TodosUsuarios();
  }

  @Get(':id') 
  async UmUsuario(@Param() pessoas): Promise<Pessoas> {
    return this.pessoaService.UmUsuario(pessoas.id)
  }

  @Post()
  async Cadastro(@Body() createPessoaDto: CreatePessoaDto) {
    await this.pessoaService.Criar(createPessoaDto)
    return 'salvo!'
  }

  // @Put()
  // Editar(@Body() pessoas: Pessoas): Pessoas {
  //   return this.pessoaService.Editar(pessoas)
  // }

  @Delete(':id')
  async Delete(@Param('id') id: string){
    return this.pessoaService.Deletar(id)
  }
}
