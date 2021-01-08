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
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { ComidaComponent } from './pages/comida/comida.component'; 
import {MatTableModule} from '@angular/material/table'; 
import { LOCALE_ID } from '@angular/core';
import { BebidaInserirDialogComponent } from './pages/bebida-inserir-dialog/bebida-inserir-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select'; 
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ConfirmDialogComponent } from './pages/confirm-dialog/confirm-dialog.component';
import { TipoBebidaPipe } from './shared/pipes/tipo-bebida.pipe';
import { BebidaEditarDialogComponent } from './pages/bebida-editar-dialog/bebida-editar-dialog.component';

registerLocaleData(localePt);

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

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "left",
  allowNegative: false,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};

@NgModule({
  declarations: [
    AppComponent,
    BebidaComponent,
    LoginComponent,
    NavigationComponent,
    ComidaComponent,
    BebidaInserirDialogComponent,
    ConfirmDialogComponent,
    TipoBebidaPipe,
    BebidaEditarDialogComponent
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
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    CurrencyMaskModule,
    MatRadioModule,
    MatSelectModule
  ],
  providers: [
    AngularFirestore,
    AuthService,
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
