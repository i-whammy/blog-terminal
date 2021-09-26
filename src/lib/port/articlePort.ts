import { Articles } from "../domain/article";
import { CategoryId } from "../domain/category";

export abstract class ArticlePort {
    abstract fetch(startIndex: number, count: number): Articles
    abstract fetchBy(categoryId: CategoryId): Articles
}