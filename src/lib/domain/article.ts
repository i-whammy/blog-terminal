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

    constructor(title: Title, publishDate: PublishDate, companyName: CompanyName) {
        this.title = title
        this.publishDate = publishDate
        this.companyName = companyName
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
