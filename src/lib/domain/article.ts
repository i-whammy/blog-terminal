import { format, getUnixTime, parse } from 'date-fns'
import { AggregatedCompanies, AggregatedCompany, Company } from './company'

export class Articles {
    articles: Article[]
    constructor(articles: Article[]) {
        this.articles = articles
    }

    toAggregatedCompanies(): AggregatedCompanies {
        const map = this.articles.reduce((acc, article) => {
            return acc.set(article.company.name,  this.articles.filter(a => a.company.name == article.company.name).length)
        }, new Map())
        const companies = Array.from(map, ([k,v]) => ({k,v})).map(e => {
            return new AggregatedCompany(e.k, e.v)
        })
        return new AggregatedCompanies(companies)
    }

    sortByPublishDateDescending(): Articles {
        return new Articles(this.articles.sort((a,b) => getUnixTime(b.publishDate.value) - getUnixTime(a.publishDate.value)))
    }

    concat(yetArticles: Articles): Articles {
        return new Articles(this.articles.concat(yetArticles.articles))
    }
}

export class Article {
    title: string
    publishDate: PublishDate
    company: Company
    url: string

    constructor(title: string, publishDate: PublishDate, company: Company, url: string) {
        this.title = title
        this.publishDate = publishDate
        this.company = company
        this.url = url
    }
}

export class PublishDate {
    value: Date
    constructor(value: Date) {
        this.value = value
    }

    toFormattedDate(): string {
        return format(this.value, 'yyyy-MM-dd')
    }

    static of(value: string): PublishDate {
        return new PublishDate(parse(value.toString(), 'yyyy-MM-dd', new Date()))
    }
}
