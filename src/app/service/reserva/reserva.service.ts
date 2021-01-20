import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Reserva {
  id: string
  data: Date
  horario: Date
  quantidadeDePessoas: number
  mesa: number
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
