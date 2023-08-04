import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoMascotasComponent } from './components/listado-mascotas/listado-mascotas.component';
import { AgregarEditarMascotaComponent } from './components/agregar-editar-mascota/agregar-editar-mascota.component';
import { VerMascotaComponent } from './components/ver-mascota/ver-mascota.component';

const routes: Routes = [
  {path:'', redirectTo: 'listMascotas', pathMatch: 'full'},
  { path: 'listMascotas', component: ListadoMascotasComponent },
  { path: 'agregarMascota', component: AgregarEditarMascotaComponent },
  { path: 'verMascota', component: VerMascotaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
