import { Profissao } from "./profissao";

export class Cliente {
    idCliente!: number;
    nome!: string;
    sobrenome!: string;
    cpf!: string;
    dtNasc!: Date;
    idade!:  number;
    idProfissao!: number;  
    profissao!: Profissao;  
    status!: boolean;  
}
