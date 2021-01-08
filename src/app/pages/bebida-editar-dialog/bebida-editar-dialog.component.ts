import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Bebida, tiposBebida } from 'src/app/shared/model';

@Component({
  selector: 'app-bebida-editar-dialog',
  templateUrl: './bebida-editar-dialog.component.html',
  styleUrls: ['./bebida-editar-dialog.component.scss']
})
export class BebidaEditarDialogComponent implements OnInit {
  
  public tipos: any[];
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,
     private firestore: AngularFirestore,
     private dialogRef: MatDialogRef<BebidaEditarDialogComponent>,
     @Inject(MAT_DIALOG_DATA) public bebida: Bebida ) {

    this.tipos = Object.keys(tiposBebida).map(k => {
      return {
        label: tiposBebida[k], value: k
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
    this.firestore.collection("bebida").doc(this.bebida.id).update(this.form.value).then(
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
