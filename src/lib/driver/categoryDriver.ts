import { Injectable } from "@angular/core";
import { Categories, Category, CategoryId, CategoryName } from "../domain/category";
import { CategoryPort } from "../port/categoryPort";

type CategoryEntity = {
    id: String,
    name: String,
}

@Injectable()
export class CategoryDriver extends CategoryPort {
    fetch(): Categories {
        const categories: CategoryEntity[] = [
            { id: "github", name: "Github" },
            { id: "ios", name: "iOS" },
            { id: "selenium", name: "Selenium" },
            { id: "organization", name: "組織" },
            { id: "culture", name: "文化" },
            { id: "kotlin", name: "Kotlin" },
            { id: "accessibility", name: "アクセシビリティ"},
            { id: "android", name: "Android"},
        ]
        return new Categories(categories.map(c => new Category(
            new CategoryId(c.id),
            new CategoryName(c.name))))
    }

}