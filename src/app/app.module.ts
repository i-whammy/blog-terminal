import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleModule } from './components/article/article.module';
import { CategoryModule } from './components/category/category.module';
import { AggregatedCompanyModule } from './components/aggregated-company/aggregated-company.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ArticleModule,
    CategoryModule,
    AggregatedCompanyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
