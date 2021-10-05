import { Injectable } from "@angular/core";
import { Categories, Category, } from "../domain/category";
import { CategoryPort } from "../port/categoryPort";

type CategoryEntity = {
    id: string,
    name: string,
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
            { id: "accessibility", name: "アクセシビリティ" },
            { id: "android", name: "Android" },
            {
                id: "authentication",
                name: "認証"
            },
            {
                id: "appium",
                name: "Appium"
            },
            {
                id: "microservices",
                name: "マイクロサービス"
            },
            {
                id: "protocolbuffers",
                name: "Protocol Buffers"
            },
            {
                id: "autotest",
                name: "自動テスト"
            },
            {
                id: "qa",
                name: "品質保証"
            },
            { id: "bert", name: "BERT" },
            { id: "rlang", name: "R" },
        ]
        return new Categories(categories.map(c => new Category(c.id, c.name)))
    }

}