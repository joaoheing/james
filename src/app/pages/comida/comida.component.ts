import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Comida, ComidaService } from 'src/app/service/comida/comida.service';
import { ComidaEditarDialogComponent } from '../comida-editar-dialog/comida-editar-dialog.component';
import { ComidaInserirDialogComponent } from '../comida-inserir-dialog/comida-inserir-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.scss']
})
export class ComidaComponent implements OnInit {
  public comidas: Comida[];

  displayedColumns = ['nome', 'preco', 'isVegana', 'isVegetariana', 'ordemRefeicao', 'isPratoDoDia', 'descricao', 'editar', 'excluir']

  constructor(private comidaService: ComidaService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) {
      this.comidas = [];
      this.comidaService.listarComidas().subscribe(
        (comidas) => {
          this.comidas = comidas.map(comidas => {
            //adicionado o campo id no objeto comida =>(c)
            const c = comidas.payload.doc.data() as any;
            c.id = comidas.payload.doc.id;
            return c;
          });
        }
      )
  }

  ngOnInit(): void {

  }

  public adicionarComida(): void {
    this.dialog.open(ComidaInserirDialogComponent, {
      width: '400px',
    });
  }

  public excluirComida(comida: Comida): void {
    this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        titulo: "Excluir comida",
        descricao: `Você tem certeza que deseja excluir a comida "${comida.nome}"?`,
        labelBotaoConfirmar: "Excluir"
      }
    }).afterClosed().subscribe(
      excluir => {
        if (excluir) {
          this.comidaService.excluirComida(comida.id).then(
            ()=>{
              this.snackBar.open("A comida foi excluida com sucesso!", undefined, {
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

  public editarComida(comida: Comida): void {
    this.dialog.open(ComidaEditarDialogComponent, {
      width: '400px',
      data: comida
    });
  }


}
