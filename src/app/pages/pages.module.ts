import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ViewItemComponent } from './view-item/view-item.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ListModule} from "../shared/list/list.module";
import {RouterModule} from "@angular/router";
import { ItemsTableComponent } from './home/items-table/items-table.component';
import {PageHeaderModule} from "../shared/page-header/page-header.module";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";




@NgModule({
  declarations: [
    HomeComponent,
    AddItemComponent,
    ViewItemComponent,
    ItemsTableComponent,


  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    ListModule,
    RouterModule,
    PageHeaderModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ]
})
export class PagesModule { }
