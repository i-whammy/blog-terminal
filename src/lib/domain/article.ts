import { format } from 'date-fns'
import { AggregatedCompanies, AggregatedCompany, Company } from './company'

export class Articles {
    articles: Article[]
    constructor(articles: Article[]) {
        this.articles = articles
    }

    toAggregatedCompanies(): AggregatedCompanies {
        const map = this.articles.reduce((acc, article) => {
            return acc.set(article.company.name,  acc.get(article.company.name) + 1)
        }, new Map())

        return new AggregatedCompanies([])
    }
}

export class Article {
    title: Title
    publishDate: PublishDate
    company: Company
    url: URL

    constructor(title: Title, publishDate: PublishDate, company: Company, url: URL) {
        this.title = title
        this.publishDate = publishDate
        this.company = company
        this.url = url
    }
}

export class Title {
    value: String
    constructor(value: String) {
        this.value = value
    }
}

export class PublishDate {
    value: Date
    constructor(value: Date) {
        this.value = value
    }

    toFormattedDate(): String {
        return format(this.value, 'yyyy-MM-dd')
    }
}

export class URL {
    value: String
    constructor(value: String) {
        this.value = value
    }
}
