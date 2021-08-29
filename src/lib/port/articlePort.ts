import { Articles } from "../domain/article";
import { CategoryId } from "../domain/category";

export abstract class ArticlePort {
    abstract fetch(): Articles
    abstract fetchBy(categoryId: CategoryId): Articles
}