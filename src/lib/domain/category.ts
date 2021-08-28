export class Categories {
    categories: Category[]
    constructor(categories: Category[]) {
        this.categories = categories
    }
}

export class Category {
    name: String
    constructor(name: String) {
        this.name = name
    }
}