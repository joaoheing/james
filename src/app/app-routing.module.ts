import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BebidaComponent } from './pages/bebida/bebida.component';
import { LoginComponent } from './pages/login/login.component';
import { NavigationComponent } from './pages/navigation/navigation.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  }, {
    path: 'app', component: NavigationComponent, children: [
      { path: 'bebida', component: BebidaComponent },
    ]
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
