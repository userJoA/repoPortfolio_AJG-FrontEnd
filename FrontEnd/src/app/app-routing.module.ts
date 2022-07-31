import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditHabilidadComponent } from './components/habilidades/edit-habilidad.component';
import { NewHabilidadComponent } from './components/habilidades/new-habilidad.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectoComponent } from './components/proyecto/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyecto/new-proyecto.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login',component:LoginComponent},
  {path: 'newExperiencia',component:NewExperienciaComponent},
  {path: 'editExperiencia/:id',component:EditExperienciaComponent},
  {path: 'newEducacion',component:NewEducacionComponent},
  {path: 'editEducacion/:id',component:EditEducacionComponent},
  {path: 'newHabilidad',component:NewHabilidadComponent},
  {path:'editHabilidad/:id',component:EditHabilidadComponent},
  {path:'newProyecto',component:NewProyectoComponent},
  {path:'editProyecto/:id',component:EditProyectoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
