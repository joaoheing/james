import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BebidaService, Tipo } from 'src/app/service/bebida/bebida.service';

@Component({
  selector: 'app-bebida-inserir-dialog',
  templateUrl: './bebida-inserir-dialog.component.html',
  styleUrls: ['./bebida-inserir-dialog.component.scss']
})
export class BebidaInserirDialogComponent implements OnInit {

  public tipos: any[];
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private bebidaService: BebidaService,
    private dialogRef: MatDialogRef<BebidaInserirDialogComponent>,
    private snackBar: MatSnackBar) {

    this.tipos = Object.keys(Tipo).map(k => {
      return {
        label: (Tipo as any)[k], value: k
      }
    })
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      preco: [0, Validators.required],
      isAlcoolica: [false, Validators.required],
      tipo: [this.tipos[0].value, Validators.required],
      descricao: ['', Validators.required]
    });
  }

  public inserirBebida(): void {
    this.bebidaService.inserirBebida(this.form.value).then(
      () => {
        this.dialogRef.close();
      }, () => {
        this.snackBar.open("Erro ao inserir bebida!", undefined, {
          duration: 2000,
        });
      }
    )
  }


  ngOnInit(): void {
  }

}
