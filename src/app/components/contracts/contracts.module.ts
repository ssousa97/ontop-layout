import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ContractsComponent } from './contracts.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { appTableResponsiveModule } from 'src/app/directives/table-responsive/table-responsive.module';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [ContractsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    appTableResponsiveModule,
    FontAwesomeModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule
  ],
  exports: [ContractsComponent],
})
export class ContractsModule { }
