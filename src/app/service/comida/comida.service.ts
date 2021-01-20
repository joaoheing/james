import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export enum OrdemRefeicao {
  ENTRADA = "Entrada",
  PRINCIPAL = "Prato principal",
  SOBREMESA = "Sobremesa"

}

export interface Comida {
  id: string
  nome: string
  preco: number
  isVegana: boolean
  isVegetariana: boolean
  ordemRefeicao: OrdemRefeicao
  isPratoDoDia: boolean
  descricao: string
}


@Injectable({
  providedIn: 'root'
})
export class ComidaService {


  private readonly colecao: string = "comida";

  constructor(private firestore: AngularFirestore) { }

  public listarComidas(): Observable<DocumentChangeAction<any>[]> {
    return this.firestore.collection(this.colecao).snapshotChanges();
  }

  public inserirComida(comida: Comida): Promise<DocumentReference<any>> {
    return this.firestore.collection(this.colecao).add(comida);
  }

  public editarComida(comida: Comida): Promise<void> {
    return this.firestore.collection(this.colecao).doc(comida.id).update(comida);
  }

  public excluirComida(id: string): Promise<void> {
    return this.firestore.collection(this.colecao).doc(id).delete();
  }
}
