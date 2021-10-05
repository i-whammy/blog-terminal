import { Articles } from "../domain/article";

export abstract class ArticlePort {
    abstract fetch(startIndex: number, count: number): Articles
    abstract fetchBy(categoryId: string): Articles
}