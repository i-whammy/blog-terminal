import { Injectable } from "@angular/core";
import { Article, Articles, PublishDate, } from "../domain/article";
import { Company, } from "../domain/company";
import { ArticleDisplayPort } from "../port/articleDisplayPort";
import { ArticleState } from "../state/articleState";

@Injectable()
export class ArticlePresenter extends ArticleDisplayPort {
    constructor(private articleState: ArticleState){
        super()
    }

    add(articles: Articles): void {
        this.articleState.articles = this.articleState.articles.concat(articles.articles.map(article => {
            return {
                title: article.title,
                publishDate: article.publishDate.toFormattedDate(),
                company: {
                    name: article.company.name
                },
                url: article.url,
            }
        }))
    }

    get(): Articles {
        const articles = this.articleState.articles.map(article => new Article(
            article.title,
            PublishDate.of(article.publishDate),
            new Company(article.company.name),
            article.url
        ))
        return new Articles(articles)
    }

    store(articles: Articles) {
        this.articleState.articles = articles.articles.map(article => {
            return {
                title: article.title,
                publishDate: article.publishDate.toFormattedDate(),
                company: {
                    name: article.company.name
                },
                url: article.url,
            }
        })
    }

}