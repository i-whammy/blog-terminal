import { Injectable } from "@angular/core"

export type Article = {
    title: String,
    publishDate: String,
    companyName: String,
    url: String,
}

@Injectable()
export class ArticleState {
    private value: Article[]

    constructor() {
        this.value = []
    }

    set articles(articles: Article[]) {
        this.value = articles
    }

    get articles(): Article[] {
        return this.value;
    }
}

