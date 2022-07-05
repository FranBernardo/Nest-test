import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoasController } from './pessoas/PessoasController';

@Module({
  imports: [],
  controllers: [AppController, PessoasController],
  providers: [AppService],
})
export class AppModule {}
