import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import {MatCardModule} from "@angular/material/card";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule
  ]
})
export class LayoutModule { }
