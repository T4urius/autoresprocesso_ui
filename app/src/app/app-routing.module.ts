import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoresComponent } from './autores/autores.component';


const routes: Routes = [
  {
    path: 'autores',
    component: AutoresComponent
  },
  {
    path: '',
    component: AutoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
