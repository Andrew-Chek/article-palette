import { Component, Input } from '@angular/core';
import { Article } from 'src/app/shared/interfaces/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  @Input() article!: Article;
  @Input() filterKeywords: string[] = [];

  highlightKeywords(text: string): string {
    if (!this.filterKeywords.length) {
      return text;
    }
    const regex = new RegExp(this.filterKeywords.join('|'), 'gi');
    return text.replace(regex, match => `<span class="highlight">${match}</span>`);
  }
}
