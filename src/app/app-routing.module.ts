import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BebidaComponent } from './pages/bebida/bebida.component';
import { ComidaComponent } from './pages/comida/comida.component';
import { LoginComponent } from './pages/login/login.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { ReservaComponent } from './pages/reserva/reserva.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  }, {
    path: 'app', component: NavigationComponent, children: [
      { path: 'bebida', component: BebidaComponent },
      { path: 'comida', component: ComidaComponent},
      { path: 'reserva', component: ReservaComponent}
    ]
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
