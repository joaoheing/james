import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BebidaInserirDialogComponent } from '../bebida-inserir-dialog/bebida-inserir-dialog.component';

@Component({
  selector: 'app-bebida',
  templateUrl: './bebida.component.html',
  styleUrls: ['./bebida.component.scss']
})
export class BebidaComponent implements OnInit {

  public bebidas: any;

  displayedColumns = ['nome', 'preco', 'isAlcoolica', 'tipo', 'descricao']

  constructor(private firestore: AngularFirestore,
    public dialog: MatDialog) {
    this.firestore.collection("bebida").snapshotChanges().subscribe(
      (bebidas) => {
        this.bebidas = bebidas.map(bebida => bebida.payload.doc.data())
      }
    )
  }

  ngOnInit(): void {

  }

  public adicionarBebida(): void {
    this.dialog.open(BebidaInserirDialogComponent, {
      width: '400px',
    });
  }

}
