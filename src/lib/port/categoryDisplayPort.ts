import { Categories, CategoryId } from "../domain/category";

export abstract class CategoryDisplayPort {
    abstract store(categories: Categories): void
    abstract select(categoryId: CategoryId): void
}