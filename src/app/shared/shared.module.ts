import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterInputComponent } from './filter-input/filter-input.component';
import { ButtonComponent } from './button/button.component';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    FilterInputComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule
  ],
  exports: [
    FilterInputComponent,
    ButtonComponent,
  ]
})
export class SharedModule { }
