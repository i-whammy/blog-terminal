import { Injectable } from "@angular/core";
import { Articles } from "../domain/article";
import { ArticleDisplayPort } from "../port/articleDisplayPort";
import { ArticleState } from "../state/articleState";

@Injectable()
export class ArticlePresenter extends ArticleDisplayPort {
    constructor(private articleState: ArticleState){
        super()
    }

    store(articles: Articles) {
        this.articleState.articles = articles.articles.map(article => {
            return {
                title: article.title.value,
                publishDate: "",
                companyName: "",
            }
        })
    }

}