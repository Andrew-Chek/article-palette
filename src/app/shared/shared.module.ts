import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterInputComponent } from './filter-input/filter-input.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ButtonComponent } from './button/button.component';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    FilterInputComponent,
    PaginationComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule
  ],
  exports: [
    FilterInputComponent,
    PaginationComponent,
    ButtonComponent,
  ]
})
export class SharedModule { }
