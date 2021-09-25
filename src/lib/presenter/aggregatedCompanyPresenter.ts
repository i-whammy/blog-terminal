import { Injectable } from "@angular/core";
import { AggregatedCompanies } from "../domain/company";
import { AggregatedCompanyDisplayPort } from "../port/companyDisplayPort";
import { ArticleState } from "../state/articleState";

@Injectable()
export class AggregatedCompanyPresenter extends AggregatedCompanyDisplayPort {
    constructor(
        private articleState: ArticleState,
    ) {
        super()
    }

    store(companies: AggregatedCompanies): void {
        this.articleState.aggregatedCompanies = companies.companies.map(aggregatedCompany => {
            return { name: aggregatedCompany.companyName, count: aggregatedCompany.articleCount }
        })
    }
}