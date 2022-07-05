/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
@Controller('cadastro/pessoas')
export class PessoasController {
  @Get()
  todosUsuarios(): string {
    return 'primeiro metodo';
  }
}
