export class Categories {
    categories: Category[]
    constructor(categories: Category[]) {
        this.categories = categories
    }
}

export class Category {
    id: string
    name: string
    constructor(id: string, name: string) {
        this.id = id
        this.name = name
    }
}
