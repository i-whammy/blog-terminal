import { Component, OnInit } from '@angular/core';
import { ArticleState, Company } from 'src/lib/state/articleState';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  constructor(
    private articleState: ArticleState,
  ) { }

  ngOnInit(): void {
  }

  get companies(): Company[] {
    return this.articleState.companies;
  }
}
