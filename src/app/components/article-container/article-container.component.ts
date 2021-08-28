import { Component, OnInit } from '@angular/core';
import { Article, ArticleState } from 'src/lib/state/articleState';
import { ArticleUsecase } from 'src/lib/usecase/articleUsecase';

@Component({
  selector: 'app-article-container',
  templateUrl: './article-container.component.html',
  styleUrls: ['./article-container.component.scss']
})
export class ArticleContainerComponent implements OnInit {

  constructor(
    private articleUsecase: ArticleUsecase,
    private articleState: ArticleState,
  ) { }

  ngOnInit(): void {
    this.articleUsecase.fetch()
  }

  get articles(): Article[] {
    return this.articleState.articles;
  }
}
