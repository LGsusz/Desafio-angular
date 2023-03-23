import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainClientesComponent } from './clientes/main-clientes/main-clientes.component';
import { PermisosComponent } from './permisos/permisos.component';
import { InicioComponent } from './inicio/inicio.component';
import { AccesosComponent } from './accesos/accesos.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'clientes', component: MainClientesComponent },
  { path: 'permisos', component: PermisosComponent },
  { path: 'accesos', component: AccesosComponent },
  { path: '**', component: InicioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
