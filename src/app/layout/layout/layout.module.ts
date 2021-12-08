import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { CollectionsComponent } from 'src/app/pages/collections/collections.component';
import { CompaignComponent } from 'src/app/pages/compaign/compaign.component';
import { ProductsComponent } from 'src/app/pages/products/products.component';

import { ResolutionRateComponent } from 'src/app/pages/dashboard/resolution-rate/resolution-rate.component';
import { SettlementOfferComponent } from 'src/app/pages/dashboard/settlement-offer/settlement-offer.component';
import { StatewisePerformanceComponent } from 'src/app/pages/dashboard/statewise-performance/statewise-performance.component';
import { PortfolioComponent } from 'src/app/pages/dashboard/portfolio/portfolio.component';
import { ResolutionTrendsComponent } from 'src/app/pages/dashboard/resolution-trends/resolution-trends.component';
import { PortfolioOverviewComponent } from 'src/app/pages/dashboard/portfolio-overview/portfolio-overview.component';
import { ChildComponent } from 'src/app/pages/home/child/child.component';
import { ParentComponent } from 'src/app/pages/home/parent/parent.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    HomeComponent,
    CollectionsComponent,
    CompaignComponent,
    ProductsComponent,
    ResolutionRateComponent,
    SettlementOfferComponent,
    StatewisePerformanceComponent,
    PortfolioComponent,
    ResolutionTrendsComponent,
    PortfolioOverviewComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    RouterModule,
    CommonModule,SharedModule,
   
  ],
  exports:[
    LayoutComponent
  ]
})
export class LayoutModule { }
