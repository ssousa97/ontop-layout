import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractsComponent } from './contracts/contracts.component';
import { DocumentsComponent } from './documents/documents.component';

const routes: Routes = [

  {
    path: '',
    component: ContractsComponent
  },
  {
    path: 'documents',
    component: DocumentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
