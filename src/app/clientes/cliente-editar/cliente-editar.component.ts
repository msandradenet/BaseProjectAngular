import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '../../servicos/clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar.component.html',
  styles: [
  ]
})
export class ClienteEditarComponent implements OnInit {

  idRoute: any;
  listaProfisoes: any[] = []; 
  formCliente!: FormGroup;

  constructor(
    private clienteService: ClienteService,
    private Router: Router,
    private ActivatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
    ) {
      this.carregarForm(new Cliente); 
    }   

  carregarForm(model: any){
    this.formCliente =  this.formBuilder.group({
      idCliente: [model.idCliente],
      nome: [model.nome, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
      sobrenome: [model.sobrenome, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(100)])],
      cpf: [model.cpf, Validators.compose([Validators.required])],
      dtNasc: [model.dtNasc, Validators.compose([Validators.required])],
      idProfissao: [model.idProfissao, Validators.compose([Validators.required])], 
      status: [model.status, Validators.required], 
    })
  }

  ngOnInit(): void {
    this.idRoute = this.ActivatedRoute.snapshot.paramMap.get("id");

    this.clienteService.obterProfisoes().subscribe((response: any) => {
      this.listaProfisoes = response.result;
    });

    this.clienteService.obterCliente(this.idRoute).subscribe((response: any) => {
      response.result.dtNasc = response.result.dtNasc.slice(0, 10); 

      this.carregarForm(response.result); 
    });
  }

  onSubmitForm(form: any) {
    Swal.fire({
      title: '<strong>Confirmação</strong>',
      text: 'Deseja realmente editar o cliente?',
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Continuar',
      confirmButtonColor: '#343a40'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.editarCliente(form.value).subscribe((response: any) => {
          if (response.statusCode == 200) {
            this.toastr.success("Cliente editado com sucesso!");
            this.Router.navigateByUrl("/clientes");
          } else {
            this.toastr.error(response.message);
          }
        },
        error => this.toastr.error(error));
      }
    });
  }

  aplicaCssErro(campo: any){
    return {
      'is-invalid': this.verificaValidTouched(campo),
      'is-valid': this.verificaValidTouched(campo),
    }
  }

  verificaValidTouched(campo: any){
    return !this.formCliente.get(campo)?.valid && (!!this.formCliente.get(campo)?.touched || !!this.formCliente.get(campo)?.dirty);
  }

}
