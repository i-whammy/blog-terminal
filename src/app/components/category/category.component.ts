import { Component, OnInit } from '@angular/core';
import { Category, CategoryState } from 'src/lib/state/categoryState';
import { CategoryUsecase } from 'src/lib/usecase/categoryUsecase';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(
    private categoryUsecase: CategoryUsecase,
    private categoryState: CategoryState,
  ) { }

  ngOnInit(): void {
    this.categoryUsecase.fetch()
  }

  get categories(): Category[] {
    return this.categoryState.categories
  }
}
