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

export type AggregatedCompany = {
    name: String,
    count: Number,
}

@Injectable()
export class ArticleState {
    articles: Article[] = []
    aggregatedCompanies: AggregatedCompany[] = []
}

