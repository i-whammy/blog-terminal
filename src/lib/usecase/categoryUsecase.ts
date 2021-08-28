import { Injectable } from "@angular/core";
import { CategoryDisplayPort } from "../port/categoryDisplayPort";
import { CategoryPort } from "../port/categoryPort";

@Injectable()
export class CategoryUsecase {
    constructor(
        private categoryPort: CategoryPort,
        private categoryDisplayPort: CategoryDisplayPort,
    ) {}

    fetch() {
        const categories = this.categoryPort.fetch();
        this.categoryDisplayPort.store(categories)
    }
}