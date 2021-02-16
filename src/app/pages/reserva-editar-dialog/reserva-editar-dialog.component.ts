import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Periodo, Reserva, ReservaService } from 'src/app/service/reserva/reserva.service';

@Component({
  selector: 'app-reserva-editar-dialog',
  templateUrl: './reserva-editar-dialog.component.html',
  styleUrls: ['./reserva-editar-dialog.component.scss']
})
export class ReservaEditarDialogComponent implements OnInit {

  public periodos: any[];
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private reservaService: ReservaService,
    private dialogRef: MatDialogRef<ReservaEditarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public reserva: Reserva,
    private snackBar: MatSnackBar) {

    this.periodos = Object.keys(Periodo).map(p => {
      return {
        label: (Periodo as any)[p], value: p
      }
    })
    this.form = this.formBuilder.group({
      nome: [reserva.nome, Validators.required],
      numeroMesa: [reserva.mesa, Validators.compose([Validators.required,Validators.min(1)])],
      quantidadeDePessoas: [reserva.quantidadeDePessoas, Validators.compose([Validators.required,Validators.min(1)])],
      data: [reserva.data, Validators.required],
      periodo: [reserva.periodo, Validators.required],
    });
  }

  public editarReserva(): void {
    const reserva = this.form.value;
    reserva.id = this.reserva.id;
    this.reservaService.editarReserva(reserva).then(
      () => {
        this.dialogRef.close();
      }, () => {
        this.snackBar.open("Erro ao editar reserva!", undefined, {
          duration: 2000,
        });
      }
    )
  }


  ngOnInit(): void {
  }
}
