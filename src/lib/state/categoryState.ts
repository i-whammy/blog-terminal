import { Injectable } from "@angular/core"

export type Category = {
    id: String,
    name: String,
    selected: boolean,
}

@Injectable()
export class CategoryState {
    private value: Category[]
    constructor() {
        this.value = []
    }

    set categories(categories: Category[]) {
        this.value = categories
    }

    get categories(): Category[] {
        return this.value
    }

    select(categoryId: String) {
        this.value.forEach(e => e.selected = false)
        this.value.find(e => e.id == categoryId)!!.selected = true
    }
}