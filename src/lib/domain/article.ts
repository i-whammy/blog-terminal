import { format } from 'date-fns'

export class Articles {
    articles: Article[]
    constructor(articles: Article[]) {
        this.articles = articles
    }
}

export class Article {
    title: Title
    publishDate: PublishDate
    companyName: CompanyName
    url: URL

    constructor(title: Title, publishDate: PublishDate, companyName: CompanyName, url: URL) {
        this.title = title
        this.publishDate = publishDate
        this.companyName = companyName
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

export class CompanyName {
    value: String
    constructor(value: String) {
        this.value = value;
    }
}

export class URL {
    value: String
    constructor(value: String) {
        this.value = value
    }
}
