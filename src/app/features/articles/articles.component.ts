import { Component, OnDestroy, OnInit } from '@angular/core';
import { ArticleApiService } from './article-api/article-api.service';
import { Article } from 'src/app/shared/interfaces/Article';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnDestroy, OnInit {
  articles: Article[] = [];
  count: number = 0;
  subscriptions: Subscription[] = [];

  constructor(private articleApiService: ArticleApiService) {}

  ngOnInit() {
    this.getArticlesWithPagination(100, 0);
    this.getCount();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  getArticlesWithPagination(limit: number, offset: number) {
    const subscription = this.articleApiService.getArticlesWithPagination(limit, offset).subscribe(response => {
      this.articles = response.results;
    });
    this.subscriptions.push(subscription);
  }

  getCount() {
    const subscribtion = this.articleApiService.getArticlesWithPagination(100, 0).subscribe(response => {
      this.count = response.count;
    });
    this.subscriptions.push(subscribtion);
  }
}
