import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryUsecase } from 'src/lib/usecase/categoryUsecase';
import { CategoryDriver } from 'src/lib/driver/categoryDriver';
import { CategoryPort } from 'src/lib/port/categoryPort';
import { CategoryPresenter } from 'src/lib/presenter/categoryPresenter';
import { CategoryDisplayPort } from 'src/lib/port/categoryDisplayPort';
import { CategoryState } from 'src/lib/state/categoryState';
import { ArticleModule } from '../article/article.module';



@NgModule({
  declarations: [
    CategoryComponent,
  ],
  imports: [
    CommonModule,
    ArticleModule,
  ],
  exports: [
    CategoryComponent,
  ],
  providers: [
    CategoryUsecase,
    { provide: CategoryPort, useClass: CategoryDriver },
    { provide: CategoryDisplayPort, useClass: CategoryPresenter },
    CategoryState,
  ]
})
export class CategoryModule { }
