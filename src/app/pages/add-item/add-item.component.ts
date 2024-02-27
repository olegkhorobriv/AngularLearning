import {Component, ViewChild} from '@angular/core';
import {ListItem} from "../../@models/list-item.interface";
import {Types} from "../../@models/types.enum";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HomeService} from "../home/home.service";
import {Item} from "../../@models/item.interface";
import {ListComponent} from "../../shared/list/list.component";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {

  @ViewChild('typeList') typeList: ListComponent;

  header = 'Додати запис';

  types: ListItem[] = [
    { value: Types.grocery, name: 'Продукти'},
    { value: Types.medical, name: 'Ліки'},
    { value: Types.book, name: 'Книги'},
  ]

  form = new FormGroup({
    type: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
  })

  toBuy = true;

  constructor(
    private router: Router,
    private homeService: HomeService
  ) {
  }

  typeSelected(e) {
    this.form.controls.type.patchValue(e);
  }

  save() {
    this.form.markAllAsTouched();

    if (!this.form.controls.type.value) {
      this.typeList.selected.markAsTouched();
    }

    if (!this.form.valid) return;

    const saveItem: Item = {
      id: Math.floor(Math.random() * 10),
      name: this.form.controls.name.value,
      type: Types[this.form.controls.type.value],
      quantity: this.form.controls.quantity.value,
      toBuy: this.toBuy,
      createdAt: new Date()
    }

    this.homeService.setValue(saveItem);

    this.router.navigate(['']).then();
  }
}
