import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterInputComponent } from './filter-input/filter-input.component';
import { ButtonComponent } from './button/button.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    FilterInputComponent,
    ButtonComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  exports: [
    FilterInputComponent,
    ButtonComponent,
    LoaderComponent,
  ]
})
export class SharedModule { }
