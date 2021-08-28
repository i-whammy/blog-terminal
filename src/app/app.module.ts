import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleContainerModule } from './components/article-container/article-container.module';
import { CategoryModule } from './components/category/category.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ArticleContainerModule,
    CategoryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
