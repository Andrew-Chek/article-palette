import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './features/articles/articles.component';
import { ArticleInfoComponent } from './features/articles/article-info/article-info.component';

const routes: Routes = [
  {
    path: '', component: ArticlesComponent,
    pathMatch: 'full',
  },
  {
    path: 'article/:id', component: ArticleInfoComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
