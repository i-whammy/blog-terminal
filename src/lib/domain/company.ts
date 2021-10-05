export class Companies {
    companies: Company[]
    constructor(companies: Company[]) {
        this.companies = companies
    }
}

export class Company {
    name: string
    constructor(name: string) {
        this.name = name
    }
}

export class AggregatedCompanies {
    companies: AggregatedCompany[]
    constructor(companies: AggregatedCompany[]) {
        this.companies = companies
    }
}

export class AggregatedCompany {
    companyName: string
    articleCount: number
    constructor(companyName: string, articleCount: number) {
        this.companyName = companyName
        this.articleCount = articleCount
    }
}