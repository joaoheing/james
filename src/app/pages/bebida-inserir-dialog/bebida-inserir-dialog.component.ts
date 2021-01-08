import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { tiposBebida } from 'src/app/shared/model';

@Component({
  selector: 'app-bebida-inserir-dialog',
  templateUrl: './bebida-inserir-dialog.component.html',
  styleUrls: ['./bebida-inserir-dialog.component.scss']
})
export class BebidaInserirDialogComponent implements OnInit {

  public tipos: any[];
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private firestore: AngularFirestore, private dialogRef: MatDialogRef<BebidaInserirDialogComponent>) {

    this.tipos = Object.keys(tiposBebida).map(k => {
      return {
        label: tiposBebida[k], value: k
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
    this.firestore.collection("bebida").add(this.form.value).then(
      () => {
        this.dialogRef.close();
      },(error) => {
        alert(error)
      }
    )
  }


  ngOnInit(): void {
  }

}
