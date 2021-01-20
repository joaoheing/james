import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReservaService } from 'src/app/service/reserva/reserva.service';

@Component({
  selector: 'app-reserva-inserir-dialog',
  templateUrl: './reserva-inserir-dialog.component.html',
  styleUrls: ['./reserva-inserir-dialog.component.scss']
})
export class ReservaInserirDialogComponent implements OnInit {

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private reservaService: ReservaService,
    private dialogRef: MatDialogRef<ReservaInserirDialogComponent>,
    private snackBar: MatSnackBar) {

    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      numeroMesa: [1, Validators.compose([Validators.required,Validators.min(1)])],
      quantidadeDePessoas: [1, Validators.compose([Validators.required,Validators.min(1)])],
      picker: [, Validators.required],
    });
  }

  public inserirReserva(): void {
    this.reservaService.inserirReserva(this.form.value).then(
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
