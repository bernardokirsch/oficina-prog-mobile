import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-servicos-listagem',
  templateUrl: './tipo-servicos-listagem.page.html',
  styleUrls: ['./tipo-servicos-listagem.page.scss'],
})
export class TipoServicosListagemPage implements OnInit {

  constructor() { }

  public tiposServicos = [
    { id: 1, nome: 'Alinhamento', valor: 12.34 },
    { id: 2, nome: 'Balanceamento', valor: 56.78 },
    { id: 3, nome: 'Revisão Freios', valor: 90.12 },
    { id: 4, nome: 'Suspensão', valor: 34.56 }
  ];

  ngOnInit() {
  }

}
