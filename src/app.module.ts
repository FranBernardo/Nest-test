/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PessoaModule } from './pessoas/Pessoa.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://biblioteca:12345@cluster0.jszgenl.mongodb.net/?retryWrites=true&w=majority'),
  PessoaModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
