import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ComidaService, OrdemRefeicao } from 'src/app/service/comida/comida.service';

@Component({
  selector: 'app-comida-inserir-dialog',
  templateUrl: './comida-inserir-dialog.component.html',
  styleUrls: ['./comida-inserir-dialog.component.scss']
})
export class ComidaInserirDialogComponent implements OnInit {

  public ordens: any[];
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private comidaService: ComidaService,
    private dialogRef: MatDialogRef<ComidaInserirDialogComponent>,
    private snackBar: MatSnackBar) {

    this.ordens = Object.keys(OrdemRefeicao).map(k => {
      return {
        label: (OrdemRefeicao as any)[k], value: k
      }
    })
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      preco: [0, Validators.required],
      isVegana: [false, Validators.required],
      isVegetariana: [false, Validators.required],
      isPratoDoDia: [false, Validators.required],
      ordemRefeicao: [this.ordens[0].value, Validators.required],
      descricao: ['', Validators.required]
    });
  }

  public inserirComida(): void {
    this.comidaService.inserirComida(this.form.value).then(
      () => {
        this.dialogRef.close();
      }, () => {
        this.snackBar.open("Erro ao inserir comida!", undefined, {
          duration: 2000,
        });
      }
    )
  }


  ngOnInit(): void {
  }

}
