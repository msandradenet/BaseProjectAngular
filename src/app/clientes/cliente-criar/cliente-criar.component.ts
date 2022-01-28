import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from '../../servicos/clientes.service';


@Component({
  selector: 'app-cliente-criar',
  templateUrl: './cliente-criar.component.html'
})
export class ClienteCriarComponent implements OnInit {

  listaProfisoes: any[] = []; 
  formCliente: FormGroup;

  constructor(
    private clienteService: ClienteService,
    private Router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
    ) { 
      this.formCliente =  this.formBuilder.group({
        idCliente: [0],
        nome: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
        sobrenome: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(100)])],
        cpf: ['', Validators.compose([Validators.required ])],
        dtNasc: ['', Validators.compose([Validators.required])],
        idProfissao: ['', Validators.compose([Validators.required])], 
        status: [true, Validators.required], 
      });
     }   

  ngOnInit(): void {
    this.clienteService.obterProfisoes().subscribe((response: any) => {
      this.listaProfisoes = response.result;
    });
  }

  onSubmitForm(form: any) { 
    if(this.formCliente.valid){      
      Swal.fire({
        title: '<strong">Confirmação</strong>',
        text: 'Deseja realmente cadastrar o cliente?',
        icon: 'question',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Continuar',
        confirmButtonColor: '#343a40'
      }).then((result) => {
        if (result.isConfirmed) {
          this.clienteService.cadastrarCliente(form.value).subscribe((response: any) => {
            if (response.statusCode == 200) {
              this.toastr.success("Cliente cadastrado com sucesso!");
              this.Router.navigateByUrl("/clientes");
            } else {
              this.toastr.error(response.message);
            }
          },
          error => this.toastr.error(error));
        }
       });
    }  
    else{
      Object.keys(this.formCliente.controls).forEach(campo => {
        const controle = this.formCliente.get(campo);
        controle?.markAsDirty();
      });
    }   
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
