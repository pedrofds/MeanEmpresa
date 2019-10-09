import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuncionarioCreateComponent } from './components/funcionario-create/funcionario-create.component';
import { FuncionarioListComponent } from './components/funcionario-list/funcionario-list.component';
import { FuncionarioEditComponent } from './components/funcionario-edit/funcionario-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-funcionario' },
  { path: 'create-funcionario', component: FuncionarioCreateComponent },
  { path: 'edit-funcionario/:id', component: FuncionarioEditComponent },
  { path: 'funcionarios-list', component: FuncionarioListComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }