import { Injectable } from "@angular/core";
import { Articles } from "../domain/article";
import { ArticleDisplayPort } from "../port/articleDisplayPort";
import { ArticlePort } from "../port/articlePort";
import { AggregatedCompanyDisplayPort } from "../port/companyDisplayPort";

@Injectable()
export class ArticleUsecase {
    constructor(
        private articlePort: ArticlePort,
        private articleDisplayPort: ArticleDisplayPort,
        private aggregatedCompanyDisplayPort: AggregatedCompanyDisplayPort,
    ) {}

    fetch() {
        const articles = this.articlePort.fetch()
        this.storeArticles(articles.sortByPublishDateDescending())
    }

    storeArticles(articles: Articles) {
        this.articleDisplayPort.store(articles)
        this.aggregatedCompanyDisplayPort.store(articles.toAggregatedCompanies())        
    }
}