import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleModule } from './components/article/article.module';
import { CategoryModule } from './components/category/category.module';
import { CompanyModule } from './components/company/company.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ArticleModule,
    CategoryModule,
    CompanyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
