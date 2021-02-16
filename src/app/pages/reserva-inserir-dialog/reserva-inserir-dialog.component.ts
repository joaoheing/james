import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Periodo, ReservaService } from 'src/app/service/reserva/reserva.service';

@Component({
  selector: 'app-reserva-inserir-dialog',
  templateUrl: './reserva-inserir-dialog.component.html',
  styleUrls: ['./reserva-inserir-dialog.component.scss']
})
export class ReservaInserirDialogComponent implements OnInit {

  public periodos: any[];
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private reservaService: ReservaService,
    private dialogRef: MatDialogRef<ReservaInserirDialogComponent>,
    private snackBar: MatSnackBar) {

    this.periodos = Object.keys(Periodo).map(p => {
      return {
        label: (Periodo as any)[p], value: p
      }
    })

    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      numeroMesa: [1, Validators.compose([Validators.required, Validators.min(1)])],
      quantidadeDePessoas: [1, Validators.compose([Validators.required, Validators.min(1)])],
      data: [null, Validators.required],
      periodo: ['', Validators.required],
    });
  }

  public inserirReserva(): void {
    const dados = this.form.value;
    const horario = this.form.value.hora.split(':');
    const data = dados.data as Date;
    data.setHours(Number(horario[0]));
    data.setMinutes(Number(horario[1]));
    this.reservaService.inserirReserva({
      mesa: dados.numeroMesa,
      quantidadeDePessoas: dados.quantidadeDePessoas,
      nome: dados.nome,
      data: data,
      periodo: dados.periodo
    }).then(
      () => {
        this.dialogRef.close();
      }, () => {
        this.snackBar.open("Erro ao inserir reserva!", undefined, {
          duration: 2000,
        });
      }
    )
  }

  ngOnInit(): void {
  }
}
