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

    fetchLatestArticles(count: number) {
        const articles = this.articlePort.fetch(0, count)
        this.storeArticles(articles)
    }

    fetchLatestArticlesFrom(startIndex: number, count: number) {
        const articles = this.articlePort.fetch(startIndex, count)
        this.addArticles(articles)
    }

    storeArticles(articles: Articles) {
        this.articleDisplayPort.store(articles)
        this.aggregatedCompanyDisplayPort.store(articles.toAggregatedCompanies())
    }

    addArticles(articles: Articles) {
        const existingArticles = this.articleDisplayPort.get()
        this.articleDisplayPort.add(articles)
        this.aggregatedCompanyDisplayPort.store(existingArticles.concat(articles).toAggregatedCompanies())
    }
}