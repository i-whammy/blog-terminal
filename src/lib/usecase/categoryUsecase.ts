import { Injectable } from "@angular/core";
import { ArticlePort } from "../port/articlePort";
import { CategoryDisplayPort } from "../port/categoryDisplayPort";
import { CategoryPort } from "../port/categoryPort";
import { ArticleUsecase } from "./articleUsecase";

@Injectable()
export class CategoryUsecase {
    constructor(
        private categoryPort: CategoryPort,
        private categoryDisplayPort: CategoryDisplayPort,
        private articlePort: ArticlePort,
        private articleUsecase: ArticleUsecase,
    ) {}

    fetch() {
        const categories = this.categoryPort.fetch();
        this.categoryDisplayPort.store(categories)
    }

    select(categoryId: string) {
        this.categoryDisplayPort.select(categoryId)
        const articles = this.articlePort.fetchBy(categoryId)
        this.articleUsecase.storeArticles(articles.sortByPublishDateDescending())
    }
}