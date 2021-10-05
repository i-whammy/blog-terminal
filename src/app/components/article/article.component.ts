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
    // console.log('scrol client height ' + event.target.clientHeight)
    // console.log('scrol top ' + event.target.scrollTop)
    // console.log('scrol height ' + event.target.scrollHeight)
    const isScrolledToBottom = event.target.clientHeight + event.target.scrollTop >= event.target.scrollHeight
    if (isScrolledToBottom) {
      // console.log('fire!!!')
      this.articleUsecase.fetchLatestArticlesFrom(this.articles.length, 5)
    }
  }
}
