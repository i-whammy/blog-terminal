import { Injectable } from "@angular/core"

export type Article = {
    title: String,
    publishDate: String,
    company: Company,
    url: String,
}

export type Company = {
    name: String,
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

    get companies(): Company[] {
        return this.value.map(a => a.company)
    }
}

