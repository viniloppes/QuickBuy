import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compra-realizada',
  templateUrl: './compra-realizada.component.html',
  styleUrls: ['./compra-realizada.component.css']
})
export class CompraRealizadaComponent implements OnInit {
  public pedidoId: string;
  constructor() { }

  ngOnInit() {
    this.pedidoId = sessionStorage.getItem("pedidoId");
  }

}
