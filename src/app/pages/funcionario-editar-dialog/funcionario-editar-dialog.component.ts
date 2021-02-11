import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Funcionario, FuncionarioService, CargoFuncionario } from 'src/app/service/funcionario/funcionario.service';

@Component({
  selector: 'app-funcionario-editar-dialog',
  templateUrl: './funcionario-editar-dialog.component.html',
  styleUrls: ['./funcionario-editar-dialog.component.scss']
})
export class FuncionarioEditarDialogComponent implements OnInit {

  public cargos: any[];
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private funcionarioService: FuncionarioService,
    private dialogRef: MatDialogRef<FuncionarioEditarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public funcionario: Funcionario,
    private snackBar: MatSnackBar) {

    this.cargos = Object.keys(CargoFuncionario).map(k => {
      return {
        label: (CargoFuncionario as any)[k], value: k
      }
    })
    this.form = this.formBuilder.group({
      nome: [funcionario.nome, Validators.required],
      email: [funcionario.email, Validators.required],
      cargo: [funcionario.cargo, Validators.required]
    });
  }

  public editarFuncionario(): void {
    const funcionario = this.form.value;
    funcionario.id = this.funcionario.id;
    this.funcionarioService.editarFuncionario(funcionario).then(
      () => {
        this.dialogRef.close();
      }, () => {
        this.snackBar.open("Erro ao editar funcionario!", undefined, {
          duration: 2000,
        });
      }
    )
  }


  ngOnInit(): void {
  }


}
