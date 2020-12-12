import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, DocumentSnapshot } from '@angular/fire/firestore';
import { BehaviorSubject, Subscription } from 'rxjs';


export enum Cargo {
  GERENTE,
  GARCOM,
  CAIXA
}

export interface Usuario {
  id: string
  nome: string
  tipo: Cargo
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _$usuario:BehaviorSubject<Usuario>;
  private subscriptions: Subscription;

  public get $usuario() {
    return this._$usuario.asObservable();
  } 

  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore) {
    this._$usuario = new BehaviorSubject(null as any);
    this.subscriptions = new Subscription();
  }

  public login(email: string, senha: string): Promise<void> {
    return new Promise<void>((resolve,reject) => {
      this.auth.signInWithEmailAndPassword(email, senha).then(
         dados => {
         this.firestore.collection('funcionario').doc(dados.user?.uid).get().toPromise().then(
           d => {
              if (d.exists) {
                this._$usuario.next(this.firebaseDataToUsuario(d as any));
                this.observarUsuario(dados.user?.uid as any);
                resolve();
              } else {
                reject("Usuario nao encontrado");
              }
           }
         )                  
        }, erro => {
         reject("Usuario e senha incorretos");
        }
       )
    })
  }

  private observarUsuario(id: string): void {
    const sub = this.firestore.collection('funcionario').doc(id).snapshotChanges().subscribe(
      u => {
        this._$usuario.next(this.firebaseDataToUsuario(u.payload));
      }
    )
    this.subscriptions.add(sub);
  }

  private firebaseDataToUsuario(data: DocumentSnapshot<any>): Usuario {
    const dados = data.data() as any;
    return {
      id: data.id,
      nome: dados.nome,
      tipo: dados.tipo
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
