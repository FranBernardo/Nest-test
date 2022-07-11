import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoaService } from './pessoas/Pessoa.service';
import { PessoasController } from './pessoas/PessoasController';

@Module({
  imports: [],
  controllers: [AppController, PessoasController],
  providers: [AppService, PessoaService],
})
export class AppModule {}
