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
  articlesCount: number = 0;
  subscriptions: Subscription[] = [];
  currentPage: number = 1;
  pageCount!: number;
  articlesPerPage: number = 10;
  

  constructor(private articleApiService: ArticleApiService) {}

  ngOnInit() {
    this.getArticlesWithPagination();
    this.getCount();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  getArticlesWithPagination() {
    const offset = (this.currentPage - 1) * this.articlesPerPage;
    const subscription = this.articleApiService.getArticlesWithPagination(this.articlesPerPage, offset).subscribe(response => {
      this.articles = response.results;
    });
    this.subscriptions.push(subscription);
  }

  getCount() {
    const subscribtion = this.articleApiService.getArticlesWithPagination(100, 0).subscribe(response => {
      this.articlesCount = response.count;
      this.pageCount = Math.ceil(this.articlesCount / 100);
    });
    this.subscriptions.push(subscribtion);
  }

  onPageChange(event: any) {
    this.currentPage = event.pageIndex;
    this.articlesPerPage = event.pageSize;
    this.getArticlesWithPagination();
  }

  onPageSizeChange(event: any) {
    console.log("here changing")
    this.articlesPerPage = event.pageSize;
    this.currentPage = 0; // Reset to the first page when changing page size
    this.getArticlesWithPagination();
  }
}
