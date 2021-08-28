import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleContainerComponent } from './article-container.component';
import { ArticleUsecase } from 'src/lib/usecase/articleUsecase';
import { ArticleDriver } from 'src/lib/driver/articleDriver';
import { ArticlePresenter } from 'src/lib/presenter/articlePresenter';
import { ArticlePort } from 'src/lib/port/articlePort';
import { ArticleDisplayPort } from 'src/lib/port/articleDisplayPort';
import { ArticleState } from 'src/lib/state/articleState';

@NgModule({
  declarations: [
    ArticleContainerComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ArticleContainerComponent,
  ],
  providers: [
    ArticleUsecase,
    { provide: ArticlePort, useClass: ArticleDriver },
    { provide: ArticleDisplayPort, useClass : ArticlePresenter },
    ArticleState,
  ]
})
export class ArticleContainerModule { }
