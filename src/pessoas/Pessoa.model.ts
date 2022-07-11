/* eslint-disable prettier/prettier */

export class Pessoa{
    id: number;
    nome: string;
    cpf: number;
    dataNascimento: string;
    endereco: string

    constructor(nome: string, cpf: number, dataNascimento: string, endereco:string){
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco; 
    }
}