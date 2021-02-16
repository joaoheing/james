import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export enum Periodo {
  TARDE = 'Tarde',
  NOITE = 'Noite'
}

export interface Reserva {
  id?: string
  nome: string
  data: Date
  quantidadeDePessoas: number
  mesa: number
  periodo: Periodo
}

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private readonly colecao: string = "reserva";

  constructor(private firestore: AngularFirestore) { }

  public listarReservas(): Observable<DocumentChangeAction<any>[]> {
    return this.firestore.collection(this.colecao).snapshotChanges();
  }

  public inserirReserva(reserva: Reserva): Promise<DocumentReference<any>> {
    return this.firestore.collection(this.colecao).add(reserva);
  }

  public editarReserva(reserva: Reserva): Promise<void> {
    return this.firestore.collection(this.colecao).doc(reserva.id).update(reserva);
  }

  public excluirReserva(id: string): Promise<void> {
    return this.firestore.collection(this.colecao).doc(id).delete();
  }
}
