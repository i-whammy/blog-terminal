import { Companies } from "../domain/company";

export abstract class CompanyDisplayPort {
    abstract store(companies: Companies): void
}