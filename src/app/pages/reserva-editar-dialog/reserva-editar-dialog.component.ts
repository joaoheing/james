import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tipo } from 'src/app/service/bebida/bebida.service';
import { Reserva, ReservaService } from 'src/app/service/reserva/reserva.service';

@Component({
  selector: 'app-reserva-editar-dialog',
  templateUrl: './reserva-editar-dialog.component.html',
  styleUrls: ['./reserva-editar-dialog.component.scss']
})
export class ReservaEditarDialogComponent implements OnInit {

  public tipos: any[];
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private reservaService: ReservaService,
    private dialogRef: MatDialogRef<ReservaEditarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public reserva: Reserva,
    private snackBar: MatSnackBar) {

    this.tipos = Object.keys(Tipo).map(k => {
      return {
        label: (Tipo as any)[k], value: k
      }
    })
    this.form = this.formBuilder.group({
      nome: [reserva.nome, Validators.required],
      numeroMesa: [reserva.mesa, Validators.compose([Validators.required,Validators.min(1)])],
      quantidadeDePessoas: [reserva.quantidadeDePessoas, Validators.compose([Validators.required,Validators.min(1)])],
      data: [reserva.data, Validators.required],
      hora: [reserva.data, Validators.required],
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
