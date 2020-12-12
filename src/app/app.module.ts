import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { BebidaComponent } from './pages/bebida/bebida.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from './service/auth/auth.service';
import { AngularFireAuthModule } from "@angular/fire/auth";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 

const firebaseConfig = {
  apiKey: "AIzaSyBvciYkOI96YDM2l1Sq8b_Mhs65tAiJG0A",
  authDomain: "james-7539c.firebaseapp.com",
  databaseURL: "https://james-7539c.firebaseio.com",
  projectId: "james-7539c",
  storageBucket: "james-7539c.appspot.com",
  messagingSenderId: "264089692335",
  appId: "1:264089692335:web:2d5c34dfd878d86b120c5a",
  measurementId: "G-21N10M86FQ"
};

@NgModule({
  declarations: [
    AppComponent,
    BebidaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
      
  ],
  providers: [
    AngularFirestore,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
