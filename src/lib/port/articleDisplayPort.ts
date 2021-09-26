import { Articles } from "../domain/article";

export abstract class ArticleDisplayPort {
    abstract add(articles: Articles): void
    abstract get(): Articles
    abstract store(articles: Articles): void
}