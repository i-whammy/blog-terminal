import { Component, OnInit } from '@angular/core';
import { AggregatedCompany, ArticleState } from 'src/lib/state/articleState';

@Component({
  selector: 'app-aggregated-company',
  templateUrl: './aggregated-company.component.html',
  styleUrls: ['./aggregated-company.component.scss']
})
export class AggregatedCompanyComponent implements OnInit {

  constructor(
    private articleState: ArticleState,
  ) { }

  ngOnInit(): void {
  }

  get aggregatedCompanies(): AggregatedCompany[] {
    return this.articleState.aggregatedCompanies;
  }

}
