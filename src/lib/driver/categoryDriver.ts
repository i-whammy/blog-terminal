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
        ]
        return new Categories(categories.map(c => new Category(
            new CategoryId(c.id),
            new CategoryName(c.name))))
    }

}