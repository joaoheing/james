import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export enum Tipo {
  AGUA = 'Água',
  CERVEJA = 'Cerveja',
  VINHO = 'Vinho',
  REFRIGERANTE = 'Refrigerante',
  SUCO = 'Suco',
  VODKA = ' Vodka',
  WHISKY = 'Whisky',
  TEKILA = 'Tekila',
  CONHAQUE = 'Conhaque',
  GIM = 'Gim',
}

export interface Bebida {
  id: string
  nome: string
  preco: number
  isAlcoolica: boolean
  tipo: Tipo
  descricao: string
}


@Injectable({
  providedIn: 'root'
})
export class BebidaService {

  private readonly colecao: string = "bebida";

  constructor(private firestore: AngularFirestore) { }

  public listarBebidas(): Observable<DocumentChangeAction<any>[]> {
    return this.firestore.collection(this.colecao).snapshotChanges();
  }

  public inserirBebida(bebida: Bebida): Promise<DocumentReference<any>> {
    return this.firestore.collection(this.colecao).add(bebida);
  }

  public editarBebida(bebida: Bebida): Promise<void> {
    return this.firestore.collection(this.colecao).doc(bebida.id).update(bebida);
  }

  public excluirBebida(id: string): Promise<void> {
    return this.firestore.collection(this.colecao).doc(id).delete();
  }
}
