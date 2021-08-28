import { Injectable } from "@angular/core";
import { Categories, CategoryId } from "../domain/category";
import { CategoryDisplayPort } from "../port/categoryDisplayPort";
import { CategoryState } from "../state/categoryState";

@Injectable()
export class CategoryPresenter extends CategoryDisplayPort {
    constructor(
    private categoryState: CategoryState,
    ) {
        super()
    }

    store(categories: Categories) {
        this.categoryState.categories = categories.categories.map(c => { return { id: c.id.value, name: c.name.value, selected: false }})
    }

    select(categoryId: CategoryId) {
        this.categoryState.select(categoryId.value)
    }
}