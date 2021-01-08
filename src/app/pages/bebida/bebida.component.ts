import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Bebida } from 'src/app/shared/model';
import { BebidaEditarDialogComponent } from '../bebida-editar-dialog/bebida-editar-dialog.component';
import { BebidaInserirDialogComponent } from '../bebida-inserir-dialog/bebida-inserir-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-bebida',
  templateUrl: './bebida.component.html',
  styleUrls: ['./bebida.component.scss']
})
export class BebidaComponent implements OnInit {

  public bebidas: any;

  displayedColumns = ['nome', 'preco', 'isAlcoolica', 'tipo', 'descricao', 'editar', 'excluir']

  constructor(private firestore: AngularFirestore,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) {
    this.firestore.collection("bebida").snapshotChanges().subscribe(
      (bebidas) => {
        this.bebidas = bebidas.map(bebida => {
          //adicionado o campo id no objeto bebida =>(b)
          const b = bebida.payload.doc.data() as any;
          b.id = bebida.payload.doc.id;
          return b;
        });
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

  public excluirBebida(bebida: any): void {
    this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        titulo: "Excluir bebida",
        descricao: `Você tem certeza que deseja excluir a bebida "${bebida.nome}"?`,
        labelBotaoConfirmar: "Excluir"
      }
    }).afterClosed().subscribe(
      excluir => {
        if (excluir) {
          this.firestore.collection("bebida").doc(bebida.id).delete().then(
            ()=>{
              this.snackBar.open("A bebida foi excluida com sucesso!", undefined, {
                duration: 2000,
              });
            },(erro)=>{
              alert(erro)
            }
          );
        }
      }
    );
  }

  public editarBebida(bebida: Bebida): void {
    this.dialog.open(BebidaEditarDialogComponent, {
      width: '400px',
      data: bebida
    });
  }


}
