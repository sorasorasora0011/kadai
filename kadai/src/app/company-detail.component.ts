import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Company } from './company';
import { CompanyService } from './company.service';

@Component({
  selector: 'company-detail',
  template: `
    <table>
      <h1>{{title}}</h1>
      <tr>{{category}}</tr>
      <ng-container *ngFor="let company of companyList">
        <tr>
          <td  rowspan="2">
            {{company.icon}}
          </td>
          <td>
            {{company.name}}
          </td>
        </tr>
        <tr>
          <td>
            {{company.year}}
          </td>
        </tr>
      </ng-container>
    </table>
  `,
  providers: [CompanyService]
})
export class CompanyDetailComponent {
  title = '会社一覧';
  category = '関東地区';
  companyList: Company[];
  
  constructor(private companyService: CompanyService) { }
  
  getCompany(): void {
    this.companyService.getCompany().then(company => this.companyList = company);
  }
  
  ngOnInit(): void {
    this.getCompany();
  }
}