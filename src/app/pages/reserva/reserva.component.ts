import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Reserva, ReservaService } from 'src/app/service/reserva/reserva.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { ReservaEditarDialogComponent } from '../reserva-editar-dialog/reserva-editar-dialog.component';
import { ReservaInserirDialogComponent } from '../reserva-inserir-dialog/reserva-inserir-dialog.component';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent implements OnInit {

  public reservas: any;

  displayedColumns = ['nome', 'data', 'periodo', 'quantidadeDePessoas', 'mesa', 'editar', 'excluir']

  constructor(private reservaService: ReservaService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) {
    this.reservaService.listarReservas().subscribe(
      (reservas) => {
        this.reservas = reservas.map(reserva => {
          //adicionado o campo id no objeto reserva =>(r)
          const r = reserva.payload.doc.data() as any;
          r.data = r.data.toDate();
          r.id = reserva.payload.doc.id;
          return r;
        });
      }
    )
  }

  ngOnInit(): void {

  }

  public adicionarReserva(): void {
    this.dialog.open(ReservaInserirDialogComponent, {
      width: '400px',
    });
  }



  public excluirReserva(reserva: any): void {
    this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        titulo: "Excluir reserva",
        descricao: `Você tem certeza que deseja excluir a reserva "${reserva.nome}"?`,
        labelBotaoConfirmar: "Excluir"
      }
    }).afterClosed().subscribe(
      excluir => {
        if (excluir) {
          this.reservaService.excluirReserva(reserva.id).then(
            () => {
              this.snackBar.open("A reserva foi excluida com sucesso!", undefined, {
                duration: 2000,
              });
            }, (erro) => {
              alert(erro)
            }
          )
        }
      }
    );
  }

  public editarReserva(reserva: Reserva): void {
    this.dialog.open(ReservaEditarDialogComponent, {
      width: '400px',
      data: reserva
    });
  }


}
