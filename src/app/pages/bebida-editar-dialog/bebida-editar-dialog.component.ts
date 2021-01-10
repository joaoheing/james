import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Bebida, BebidaService, Tipo } from 'src/app/service/bebida/bebida.service';

@Component({
  selector: 'app-bebida-editar-dialog',
  templateUrl: './bebida-editar-dialog.component.html',
  styleUrls: ['./bebida-editar-dialog.component.scss']
})
export class BebidaEditarDialogComponent implements OnInit {

  public tipos: any[];
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private bebidaService: BebidaService,
    private dialogRef: MatDialogRef<BebidaEditarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public bebida: Bebida,
    private snackBar: MatSnackBar) {

    this.tipos = Object.keys(Tipo).map(k => {
      return {
        label: (Tipo as any)[k], value: k
      }
    })
    this.form = this.formBuilder.group({
      nome: [bebida.nome, Validators.required],
      preco: [bebida.preco, Validators.required],
      isAlcoolica: [bebida.isAlcoolica, Validators.required],
      tipo: [bebida.tipo, Validators.required],
      descricao: [bebida.descricao, Validators.required]
    });
  }

  public editarBebida(): void {
    const bebida = this.form.value;
    bebida.id = this.bebida.id;
    this.bebidaService.editarBebida(bebida).then(
      () => {
        this.dialogRef.close();
      }, () => {
        this.snackBar.open("Erro ao editar bebida!", undefined, {
          duration: 2000,
        });
      }
    )
  }


  ngOnInit(): void {
  }

}
