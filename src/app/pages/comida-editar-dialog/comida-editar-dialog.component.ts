import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Comida, ComidaService, OrdemRefeicao } from 'src/app/service/comida/comida.service';

@Component({
  selector: 'app-comida-editar-dialog',
  templateUrl: './comida-editar-dialog.component.html',
  styleUrls: ['./comida-editar-dialog.component.scss']
})
export class ComidaEditarDialogComponent implements OnInit {

  public ordens: any[];
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private comidaService: ComidaService,
    private dialogRef: MatDialogRef<ComidaEditarDialogComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public comida: Comida) {

    this.ordens = Object.keys(OrdemRefeicao).map(k => {
      return {
        label: (OrdemRefeicao as any)[k], value: k
      }
    })
    this.form = this.formBuilder.group({
      nome: [comida.nome, Validators.required],
      preco: [comida.preco, Validators.required],
      isVegana: [comida.isVegana, Validators.required],
      isVegetariana: [comida.isVegetariana, Validators.required],
      isPratoDoDia: [comida.isPratoDoDia, Validators.required],
      ordemRefeicao: [comida.ordemRefeicao, Validators.required],
      descricao: [comida.descricao, Validators.required]
    });
  }

  public editarComida(): void {
    const comida = this.form.value;
    comida.id = this.comida.id;
    this.comidaService.editarComida(comida).then(
      () => {
        this.dialogRef.close();
      }, () => {
        this.snackBar.open("Erro ao editar comida!", undefined, {
          duration: 2000,
        });
      }
    )
  }


  ngOnInit(): void {
  }
}
