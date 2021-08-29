import { Injectable } from "@angular/core";
import { CategoryId } from "../domain/category";
import { ArticleDisplayPort } from "../port/articleDisplayPort";
import { ArticlePort } from "../port/articlePort";
import { CategoryDisplayPort } from "../port/categoryDisplayPort";
import { CategoryPort } from "../port/categoryPort";

@Injectable()
export class CategoryUsecase {
    constructor(
        private categoryPort: CategoryPort,
        private categoryDisplayPort: CategoryDisplayPort,
        private articlePort: ArticlePort,
        private articleDisplayPort: ArticleDisplayPort,
    ) {}

    fetch() {
        const categories = this.categoryPort.fetch();
        this.categoryDisplayPort.store(categories)
    }

    select(categoryId: CategoryId) {
        this.categoryDisplayPort.select(categoryId)
        const articles = this.articlePort.fetchBy(categoryId)
        this.articleDisplayPort.store(articles)
    }
}