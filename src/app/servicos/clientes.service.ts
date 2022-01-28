import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cliente } from "../clientes/cliente";
import { environment } from "src/environments/environment";

@Injectable()
export class ClienteService {

constructor(private http: HttpClient){}

    private urlApiClientes = environment.urlApiClientes;
    private v1 = "v1/";

    obterClientes() : Observable<Cliente[]>{
        return this.http
            .get<Cliente[]>(this.urlApiClientes + this.v1 + "cliente");
    }   

    obterCliente(id: number) : Observable<Cliente[]>{
        return this.http
            .get<Cliente[]>(this.urlApiClientes + this.v1 + "cliente/"+ id);
    }

    obterProfisoes() : Observable<Cliente[]>{
        return this.http
            .get<Cliente[]>(this.urlApiClientes + this.v1 + "profissao");
    }

    cadastrarCliente(cliente: Cliente) {
        return this.http
        .post(this.urlApiClientes + this.v1 + "cliente", cliente).pipe((response: any) => response);
    }

    editarCliente(cliente: Cliente) {
        return this.http
        .put(this.urlApiClientes + this.v1 + "cliente", cliente).pipe((response: any) => response);
    }

    excluirCliente(id: number) {
        return this.http
        .delete(this.urlApiClientes + this.v1 + "cliente/" + id).pipe((response: any) => response);
    }
}