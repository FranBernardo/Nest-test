/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { Pessoas, PessoasDocument } from './schemas/pessoa.schema'
@Injectable()
export class PessoaService {
    constructor(
        @InjectModel(Pessoas.name) private readonly pessoasModel: Model<PessoasDocument>
    ){

    }
    
    async TodosUsuarios(): Promise<Pessoas[]>{
        return this.pessoasModel.find().exec()
    }

   async UmUsuario(id: number): Promise<Pessoas>{
        return this.pessoasModel.findOne({_id: id})
    }

    async Criar(createPessoaDto: CreatePessoaDto){
        const pessoasCriada = await this.pessoasModel.create(createPessoaDto)
        return pessoasCriada
    }

    // async Editar(pessoas: Pessoas): Pessoa{
    //     return pessoas
    // }

    async Deletar(id: string): Promise<Pessoas>{
        const removePessoa = await this.pessoasModel.findByIdAndRemove({_id: id}).exec()
        return removePessoa
    }
}