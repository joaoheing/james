import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bebida-inserir-dialog',
  templateUrl: './bebida-inserir-dialog.component.html',
  styleUrls: ['./bebida-inserir-dialog.component.scss']
})
export class BebidaInserirDialogComponent implements OnInit {

  public tipos: any[];

  constructor() {
    this.tipos = [
      {label: "Água", value: "AGUA"},
      {label: "Cerveja", value: "CERVEJA"},
      {label: "Vinho", value: "VINHO"},
      {label: "Refrigerante", value: "REFRIGERANTE"},
      {label: "Suco", value: "SUCO"},
      {label: "Vodka", value: "VODKA"},
      {label: "Whisky", value: "WHISKY"},
      {label: "Tekila", value: "TEKILA"},
      {label: "Conhaque", value: "CONHAQUE"},
      {label: "Gim", value: "GIM"},]
   }

  ngOnInit(): void {
  }

}
