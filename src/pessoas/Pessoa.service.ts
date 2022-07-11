/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Pessoa } from './Pessoa.model';
@Injectable()
export class PessoaService {
    pessoas: Pessoa[] = [
        new Pessoa('fran', 12972458494, '11/04/1998', 'rua monte verde' )
    ];
    
    TodosUsuarios(): Pessoa[]{
        return this.pessoas
    }

    UmUsuario(id: number): Pessoa{
        return this.pessoas[0]
    }

    Criar(pessoa: Pessoa){
        return this.pessoas.push(pessoa)
    }

    Editar(pessoas: Pessoa): Pessoa{
        return pessoas
    }

    Deletar(id: number): Pessoa{
        return this.pessoas.pop()
    }
}