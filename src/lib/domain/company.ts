export class Companies {
    companies: Company[]
    constructor(companies: Company[]) {
        this.companies = companies
    }
}

export class Company {
    name: CompanyName
    constructor(name: CompanyName) {
        this.name = name
    }
}

export class CompanyName {
    value: String
    constructor(value: String) {
        this.value = value;
    }
}

export class AggregatedCompanies {
    companies: AggregatedCompany[]
    constructor(companies: AggregatedCompany[]) {
        this.companies = companies
    }
}

export class AggregatedCompany {
    companyName: String
    articleCount: Number
    constructor(companyName: String, articleCount: Number) {
        this.companyName = companyName
        this.articleCount = articleCount
    }
}