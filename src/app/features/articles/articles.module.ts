import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ArticleInfoComponent } from './article-info/article-info.component';



@NgModule({
  declarations: [
    ArticleComponent,
    ArticlesComponent,
    ArticleInfoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    ArticlesComponent,
    ArticleComponent
  ]
})
export class ArticlesModule { }
