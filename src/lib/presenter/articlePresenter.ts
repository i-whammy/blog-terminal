import { Injectable } from "@angular/core";
import { Article, Articles, PublishDate, Title, URL } from "../domain/article";
import { Company, CompanyName } from "../domain/company";
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
                title: article.title.value,
                publishDate: article.publishDate.toFormattedDate(),
                company: {
                    name: article.company.name.value
                },
                url: article.url.value,
            }
        }))
    }

    get(): Articles {
        const articles = this.articleState.articles.map(article => new Article(
            new Title(article.title),
            PublishDate.of(article.publishDate),
            new Company(
                new CompanyName(article.company.name)
            ),
            new URL(article.url)
        ))
        return new Articles(articles)
    }

    store(articles: Articles) {
        this.articleState.articles = articles.articles.map(article => {
            return {
                title: article.title.value,
                publishDate: article.publishDate.toFormattedDate(),
                company: {
                    name: article.company.name.value
                },
                url: article.url.value,
            }
        })
    }

}