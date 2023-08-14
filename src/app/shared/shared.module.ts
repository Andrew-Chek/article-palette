import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterInputComponent } from './filter-input/filter-input.component';
import { ButtonComponent } from './button/button.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './loader/loader.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FilterInputComponent,
    ButtonComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule
  ],
  exports: [
    FilterInputComponent,
    ButtonComponent,
    LoaderComponent,
  ]
})
export class SharedModule { }
