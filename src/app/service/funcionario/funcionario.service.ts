import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, DocumentChangeAction, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export enum CargoFuncionario {
  GERENTE = 'Gerente',
  GARCOM = 'Garcom',
  MAITRE = 'Maitre',
  CAIXA = 'Caixa'
}


export interface Funcionario {
  id: string
  nome: string
  cargo: CargoFuncionario
  email: string

}

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private readonly colecao: string = "funcionario";

  constructor(private firestore: AngularFirestore, private auth: AngularFireAuth) { }

  public listarFuncionarios(): Observable<DocumentChangeAction<any>[]> {
    return this.firestore.collection(this.colecao).snapshotChanges();
  }

  public inserirFuncionario(funcionario: Funcionario, senha: string): Promise<DocumentReference<any>> {
    return new Promise<any>((resolve, reject) => {
      this.auth.createUserWithEmailAndPassword(funcionario.email, senha).then(
        usuario => {
          this.firestore.collection(`${this.colecao}/${usuario.user?.uid}`).add(funcionario).then(
            doc => {
              resolve(doc);
            }, err => {
              reject(err)
            }
          )
        }, err => {
          if (err.code = "auth/email-already-in-use") {
            
          }
          reject(err)
        }
      )
    })
  }

  public editarFuncionario(funcionario: Funcionario): Promise<void> {
    return this.firestore.collection(this.colecao).doc(funcionario.id).update(funcionario);
  }

  public excluirFuncionario(id: string): Promise<void> {
    return this.firestore.collection(this.colecao).doc(id).delete();
  }
}
