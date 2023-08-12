import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ArticleInfoComponent } from './article-info/article-info.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    ArticleComponent,
    ArticlesComponent,
    ArticleInfoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSliderModule,
    RouterModule,
    SharedModule,
    MatPaginatorModule
  ],
  exports: [
    ArticlesComponent,
    ArticleComponent
  ]
})
export class ArticlesModule { }
