/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type PessoasDocument = Pessoas & Document;
@Schema()
export class Pessoas {
    @Prop()
    nome: string;

    @Prop({required: true})
    cpf: number;

    @Prop()
    dataNascimento: string;

    @Prop()
    endereco: string

}



export const PessoaSchema = SchemaFactory.createForClass(Pessoas) 