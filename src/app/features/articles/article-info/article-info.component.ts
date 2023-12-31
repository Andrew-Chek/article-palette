import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/shared/interfaces/Article';
import { ArticleApiService } from '../article-api/article-api.service';

@Component({
  selector: 'app-article-info',
  templateUrl: './article-info.component.html',
  styleUrls: ['./article-info.component.scss']
})
export class ArticleInfoComponent {
  article!: Article;
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleApiService: ArticleApiService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe(params => {
      const articleId = params['id'];
      this.getArticleDetails(articleId);
    });
  }

  getArticleDetails(articleId: number) {
    this.articleApiService.getArticleById(articleId).subscribe(response => {
      this.article = response;
      this.loading = false;
    });
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
