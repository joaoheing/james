import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public form: FormGroup;

    constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private authService: AuthService) {
      this.form = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
    this.authService.$usuario.subscribe(
      u => {
        console.log(u);
      }
    )
    }

    ngOnInit() {}

    isFieldInvalid(field: string) {
    }

    async onSubmit() {
      const email = this.form.get('username')?.value;
      const senha = this.form.get('password')?.value;
      this.authService.login(email,senha).then(
        () =>{
          this.snackBar.open('Logado com sucesso', undefined, {duration: 1111});
        }, erro => {
          this.snackBar.open(erro, undefined, {duration: 1111});
        }
      );
    }

    public recuperarSenha() {
        //this.dialog.open(LoginRecuperarSenhaComponent)
        //this.authService.emailTrocarSenha(this.form.value.userName);
    }
}