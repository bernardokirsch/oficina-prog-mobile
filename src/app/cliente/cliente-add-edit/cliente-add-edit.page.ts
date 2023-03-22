import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente-add-edit',
  templateUrl: './cliente-add-edit.page.html',
  styleUrls: ['./cliente-add-edit.page.scss'],
})
export class ClienteAddEditPage implements OnInit {

  // @ViewChild('inputNome', { read: ElementRef }) nome!: ElementRef;

  cliente = {nascimento: null, renda: null, tel: null, email: null, nome: null};

  clienteForm!: FormGroup;

  hasErrors = false;
  errorMessage: string[] | undefined;

  constructor(private formBuilder: FormBuilder) { }

  validationMessages = {
    nome: [
      { type: 'required', message: 'Nome é obrigatório' },
      { type: 'minlength', message: 'Nome deve ter ao menos 3 caracteres' },
      { type: 'maxlength', message: 'Nome não pode ter mais que 50 caracteres' }
    ],
    email: [
      { type: 'required', message: 'E-mail é obrigatório' },
      { type: 'email', message: 'Informe um e-mail com formato válido' }
    ],
    tel: [
      { type: 'required', message: 'Telefone é obrigatório' }
    ],
    renda: [
      { type: 'min', message: 'Renda precisa ser positiva' }
    ],
    nascimento: [
      { type: 'required', message: 'Data de nascimento é obrigatória' }
    ]
  }

  ngOnInit() {
    this.clienteForm = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      tel: ['', Validators.required],
      renda: ['0', Validators.compose([Validators.required, Validators.min(0)])],
      nascimento: ['', Validators.required]
    });
  }

  /* submit(inputNome: any, inputEmail: any, inputTelefone: any, inputRenda: any, inputNascimento: any) {
    console.log(inputNome.value + ' / ' + 
    inputEmail.value + ' / ' + 
    inputTelefone.value + ' / ' + 
    inputRenda.value + ' / ' + 
    inputNascimento.value); */

  /* submit() {
    console.log(this.nome.nativeElement.value);
  } */

  public nome: string | undefined;

  submit() {
    /* this.errorMessage = [];
    if (this.clienteForm.get('nome')!.hasError('required')) {
      this.errorMessage.push('Nome é obrigatório');
    }
    if (this.clienteForm.get('email')!.hasError('required')) {
      this.errorMessage.push('Email é obrigatório');
    }
    if (this.clienteForm.get('tel')!.hasError('required')) {
      this.errorMessage.push('Telefone é obrigatório');
    }
    if (this.clienteForm.get('renda')!.hasError('required')) {
      this.errorMessage.push('Renda é obrigatória');
    }
    if (this.clienteForm.get('nascimento')!.hasError('required')) {
      this.errorMessage.push('Data de nascimento é obrigatória');
    }
    this.hasErrors = this.errorMessage.length > 0; */
  }

}


