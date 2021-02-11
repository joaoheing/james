import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CargoFuncionario, FuncionarioService } from 'src/app/service/funcionario/funcionario.service';

@Component({
  selector: 'app-funcionario-inserir-dialog',
  templateUrl: './funcionario-inserir-dialog.component.html',
  styleUrls: ['./funcionario-inserir-dialog.component.scss']
})
export class FuncionarioInserirDialogComponent implements OnInit {

  public cargos: any[];
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private funcionarioService: FuncionarioService,
    private dialogRef: MatDialogRef<FuncionarioInserirDialogComponent>,
    private snackBar: MatSnackBar) {

    this.cargos = Object.keys(CargoFuncionario).map(k => {
      return {
        label: (CargoFuncionario as any)[k], value: k
      }
    })
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      cargo: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  public inserirFuncionario(): void {
    this.funcionarioService.inserirFuncionario(this.form.value, this.form.value.senha).then(
      () => {
        this.dialogRef.close();
      }, () => {
        this.snackBar.open("Erro ao inserir funcionario!", undefined, {
          duration: 2000,
        });
      }
    )
  }


  ngOnInit(): void {
  }

}
