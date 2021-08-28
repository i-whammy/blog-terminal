import { Articles } from "../domain/article";

export abstract class ArticleDisplayPort {
    abstract store(articles: Articles): void
}