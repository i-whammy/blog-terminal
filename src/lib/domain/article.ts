export class Articles {
    articles: Article[]
    constructor(articles: Article[]) {
        this.articles = articles
    }
}

export class Article {
    title: Title

    constructor(title: Title) {
        this.title = title
    }
}

export class Title {
    value: String
    constructor(value: String) {
        this.value = value
    }
}

