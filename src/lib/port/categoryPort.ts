import { Categories } from "../domain/category";

export abstract class CategoryPort {
    abstract fetch(): Categories
}