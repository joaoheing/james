import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-bebida',
  templateUrl: './bebida.component.html',
  styleUrls: ['./bebida.component.scss']
})
export class BebidaComponent implements OnInit {

  public bebidas: any;

  displayedColumns = ['nome', 'preco', 'isAlcoolica', 'tipo', 'descricao']

  constructor(private firestore: AngularFirestore){
    this.firestore.collection("bebida").snapshotChanges().subscribe(
      (bebidas) => {
        this.bebidas = bebidas.map(bebida => bebida.payload.doc.data())
      }
    )
  }

  ngOnInit(): void {

  }

}
