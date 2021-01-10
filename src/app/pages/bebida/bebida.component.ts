import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Bebida, BebidaService } from 'src/app/service/bebida/bebida.service';
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

  constructor(private bebidaService: BebidaService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) {
      this.bebidaService.listarBebidas().subscribe(
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
          this.bebidaService.excluirBebida(bebida.id).then(
            ()=>{
              this.snackBar.open("A bebida foi excluida com sucesso!", undefined, {
                duration: 2000,
              });
            },(erro)=>{
              alert(erro)
            }
          )
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
