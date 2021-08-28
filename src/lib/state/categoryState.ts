import { Injectable } from "@angular/core"

export type Category = {
    name: String,
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
}