import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
  originalArticles: Article[] = [];
  filterKeywords: string[] = [];
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
      this.originalArticles = this.articles;
      this.loading = false;
    });
    this.subscriptions.push(subscription);
    return this.articles;
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

  filterArticles(keyword: string): void {
    this.filterKeywords = keyword.trim().toLowerCase().split(' ');

    if (this.filterKeywords.length === 0) {
      this.articles = this.originalArticles;
      return;
    }

    const filteredArticles = this.originalArticles.filter(article => {
      const nameMatch = this.matchKeywords(article.title);
      const descriptionMatch = this.matchKeywords(article.summary);

      return nameMatch > 0 || descriptionMatch > 0;
    });

    this.articles = this.sortArticlesByPriority(filteredArticles, this.filterKeywords);
  }
  
  matchKeywords(text: string): number {
    const regex = new RegExp(this.filterKeywords.join('|'), 'gi');
    const matches = text.match(regex);
    return matches ? matches.length : 0;
  }

  sortArticlesByPriority(articles: Article[], keywords: string[]): Article[] {
    return articles.sort((a, b) => {
      const aNameMatches = keywords.filter(keyword => a.title.toLowerCase().includes(keyword)).length;
      const bNameMatches = keywords.filter(keyword => b.title.toLowerCase().includes(keyword)).length;
      const aDescriptionMatches = keywords.filter(keyword => a.summary.toLowerCase().includes(keyword)).length;
      const bDescriptionMatches = keywords.filter(keyword => b.summary.toLowerCase().includes(keyword)).length;
  
      const aPriority = aNameMatches * 2 + aDescriptionMatches;
      const bPriority = bNameMatches * 2 + bDescriptionMatches;
  
      return bPriority - aPriority;
    });
  }
}
