import { Component, OnInit } from '@angular/core';
import { Throttle } from 'angular-debounce-throttle';
import { Article, ArticleState } from 'src/lib/state/articleState';
import { ArticleUsecase } from 'src/lib/usecase/articleUsecase';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor(
    private articleUsecase: ArticleUsecase,
    private articleState: ArticleState,
  ) { }

  ngOnInit(): void {
    this.articleUsecase.fetchLatestArticles(20)
  }

  get articles(): Article[] {
    return this.articleState.articles;
  }

  get willShowMoreButton(): boolean {
    return this.articles.length < 5;
  }

  @Throttle(500)
  onScroll(event: any) {
    const isScrolledToBottom = event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight
    if (isScrolledToBottom) {
      this.articleUsecase.fetchLatestArticlesFrom(this.articles.length, 5)
    }
  }
}
