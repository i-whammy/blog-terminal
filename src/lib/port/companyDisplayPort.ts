import { AggregatedCompanies } from "../domain/company";

export abstract class AggregatedCompanyDisplayPort {
    abstract store(companies: AggregatedCompanies): void
}