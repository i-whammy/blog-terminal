import { Injectable } from "@angular/core";
import { Categories, Category } from "../domain/category";
import { CategoryPort } from "../port/categoryPort";

type CategoryEntity = {
    name: String,
}

@Injectable()
export class CategoryDriver extends CategoryPort {
    fetch(): Categories {
        const categories: CategoryEntity[] = [
            { name: "Github" },
            { name: "iOS" },
            { name: "Selenium" },
        ]
        return new Categories(categories.map(c => new Category(c.name)))
    }

}