import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ArticleApiService } from './article-api/article-api.service';
import { Article } from 'src/app/shared/interfaces/Article';
import { Subscription } from 'rxjs';
import { PaginationService } from './pagination/pagination.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnDestroy, OnInit {
  @ViewChild('paginator') paginator!: MatPaginator;
  articles: Article[] = [];
  articlesCount: number = 0;
  subscriptions: Subscription[] = [];
  pageIndex: number = 0;
  pageCount!: number;
  pageSize: number = 10;
  loading: boolean = false;

  constructor(private articleApiService: ArticleApiService, private paginationService: PaginationService) {}

  ngOnInit(): void {
    this.loading = true;
    this.pageSize = this.paginationService.getPageSize();
    this.pageIndex = this.paginationService.getPageIndex();
    this.getCount();
    this.getArticlesWithPagination();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  getArticlesWithPagination() {
    const offset = this.pageIndex * this.pageSize;
    const subscription = this.articleApiService.getArticlesWithPagination(this.pageSize, offset).subscribe(response => {
      this.articles = response.results;
      this.loading = false;
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
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.paginationService.setPageSizeAndIndex(this.pageSize, this.pageIndex);
    this.getArticlesWithPagination();
  }
}
