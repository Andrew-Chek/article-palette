import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterInputComponent } from './filter-input/filter-input.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    FilterInputComponent,
    PaginationComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
