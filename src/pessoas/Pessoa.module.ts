/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PessoaService } from './Pessoa.service';
import { PessoasController } from './PessoasController';
import { Pessoas, PessoaSchema } from './schemas/pessoa.schema'


@Module({
  imports: [MongooseModule.forFeature([{ name: Pessoas.name, schema: PessoaSchema }])],
  controllers: [PessoasController],
  providers: [PessoaService],
})
export class PessoaModule {}