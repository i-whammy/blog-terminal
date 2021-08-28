import { Injectable } from "@angular/core";
import { ArticleDisplayPort } from "../port/articleDisplayPort";
import { ArticlePort } from "../port/articlePort";

@Injectable()
export class ArticleUsecase {
    constructor(
        private articlePort: ArticlePort,
        private articleDisplayPort: ArticleDisplayPort,
    ) {}

    fetch() {
        const articles = this.articlePort.fetch()
        this.articleDisplayPort.store(articles)
    }
}