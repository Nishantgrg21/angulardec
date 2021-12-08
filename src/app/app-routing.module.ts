import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { CompaignComponent } from './pages/compaign/compaign.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:
    [
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'collections',
        component:CollectionsComponent
      },
      {
        path:'compaign',
        component:CompaignComponent
      },
      {
        path:'products',
        component:ProductsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
