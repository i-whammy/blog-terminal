import { Articles } from "../domain/article";

export abstract class ArticlePort {
    abstract fetch(): Articles
}