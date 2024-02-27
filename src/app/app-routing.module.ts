import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./@core/layout/layout.component";
import {HomeComponent} from "./pages/home/home.component";
import {AddItemComponent} from "./pages/add-item/add-item.component";
import {ViewItemComponent} from "./pages/view-item/view-item.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'add-item',
        component: AddItemComponent,
      },
      {
        path: 'view-item/:id',
        component: ViewItemComponent,
      },
      {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
