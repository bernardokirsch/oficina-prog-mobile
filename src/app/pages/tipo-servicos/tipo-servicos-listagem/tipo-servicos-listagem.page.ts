import { Component, OnInit } from '@angular/core';
import { TipoServicosService } from 'src/app/services/tipo-servicos.service';

@Component({
  selector: 'app-tipo-servicos-listagem',
  templateUrl: './tipo-servicos-listagem.page.html',
  styleUrls: ['./tipo-servicos-listagem.page.scss'],
})
export class TipoServicosListagemPage implements OnInit {

  constructor(private tipoServicoService: TipoServicosService) { }

  public tiposServicos!: any;

  ngOnInit() {
    this.tiposServicos = this.tipoServicoService.getAll();
  }

}
