import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Bebida, BebidaService } from 'src/app/service/bebida/bebida.service';
import { Funcionario, FuncionarioService } from 'src/app/service/funcionario/funcionario.service';
import { BebidaEditarDialogComponent } from '../bebida-editar-dialog/bebida-editar-dialog.component';
import { BebidaInserirDialogComponent } from '../bebida-inserir-dialog/bebida-inserir-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { FuncionarioEditarDialogComponent } from '../funcionario-editar-dialog/funcionario-editar-dialog.component';
import { FuncionarioInserirDialogComponent } from '../funcionario-inserir-dialog/funcionario-inserir-dialog.component';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
})
export class FuncionarioComponent implements OnInit {

  public funcionarios: any;

  displayedColumns = ['nome', 'email', 'tipo', 'editar', 'excluir']

  constructor(private funcionarioService: FuncionarioService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) {
      this.funcionarioService.listarFuncionarios().subscribe(
        (funcionarios) => {
          this.funcionarios = funcionarios.map(funcionario => {
            //adicionado o campo id no objeto funcionario =>(f)
            const f = funcionario.payload.doc.data() as any;
            f.id = funcionario.payload.doc.id;
            return f;
          });
        }
      )
  }

  ngOnInit(): void {

  }

  public adicionarFuncionario(): void {
    this.dialog.open(FuncionarioInserirDialogComponent, {
      width: '400px',
    });
  }

  public excluirFuncionario(funcionario: any): void {
    this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        titulo: "Excluir funcionario",
        descricao: `Você tem certeza que deseja excluir o funcionario "${funcionario.nome}"?`,
        labelBotaoConfirmar: "Excluir"
      }
    }).afterClosed().subscribe(
      excluir => {
        if (excluir) {
          this.funcionarioService.excluirFuncionario(funcionario.id).then(
            ()=>{
              this.snackBar.open("O funcionario foi excluido com sucesso!", undefined, {
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

  public editarFuncionario(funcionario: Funcionario): void {
    this.dialog.open(FuncionarioEditarDialogComponent, {
      width: '400px',
      data: funcionario
    });
  }

}
