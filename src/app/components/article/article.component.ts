import { Component, OnInit } from '@angular/core';
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
    this.articleUsecase.fetchLatestArticles(5)
  }

  get articles(): Article[] {
    return this.articleState.articles;
  }
}
