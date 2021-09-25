import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AggregatedCompanyComponent } from './aggregated-company.component';
import { ArticleModule } from '../article/article.module';
import { AggregatedCompanyDisplayPort } from 'src/lib/port/companyDisplayPort';
import { AggregatedCompanyPresenter } from 'src/lib/presenter/aggregatedCompanyPresenter';



@NgModule({
  declarations: [
    AggregatedCompanyComponent,
  ],
  imports: [
    CommonModule,
    ArticleModule,
  ],
  exports: [
    AggregatedCompanyComponent,
  ],
  providers: [
    { provide: AggregatedCompanyDisplayPort, useClass : AggregatedCompanyPresenter },
  ]
})
export class AggregatedCompanyModule { }
