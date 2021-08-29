import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ArticleUsecase } from 'src/lib/usecase/articleUsecase';
import { ArticleDriver } from 'src/lib/driver/articleDriver';
import { ArticlePresenter } from 'src/lib/presenter/articlePresenter';
import { ArticlePort } from 'src/lib/port/articlePort';
import { ArticleDisplayPort } from 'src/lib/port/articleDisplayPort';
import { ArticleState } from 'src/lib/state/articleState';

@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ArticleComponent,
  ],
  providers: [
    ArticleUsecase,
    { provide: ArticlePort, useClass: ArticleDriver },
    { provide: ArticleDisplayPort, useClass : ArticlePresenter },
    ArticleState,
  ]
})
export class ArticleModule { }
