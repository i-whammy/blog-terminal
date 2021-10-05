import { Injectable } from "@angular/core"

export type Article = {
    title: string,
    publishDate: string,
    company: Company,
    url: string,
}

export type Company = {
    name: string,
}

export type AggregatedCompany = {
    name: string,
    count: number,
}

@Injectable()
export class ArticleState {
    articles: Article[] = []
    aggregatedCompanies: AggregatedCompany[] = []
}

