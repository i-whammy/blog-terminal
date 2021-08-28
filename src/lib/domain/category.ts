export class Categories {
    categories: Category[]
    constructor(categories: Category[]) {
        this.categories = categories
    }
}

export class Category {
    id: CategoryId
    name: CategoryName
    constructor(id: CategoryId, name: CategoryName) {
        this.id = id
        this.name = name
    }
}

export class CategoryId {
    value: String
    constructor(value: String) {
        this.value = value
    }
}

export class CategoryName {
    value: String
    constructor(value: String) {
        this.value = value;
    }
}