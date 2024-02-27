import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ListItem} from "../../@models/list-item.interface";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() list: ListItem[];
  @Output() result = new EventEmitter<string>();

  selected = new FormControl('', Validators.required)

  constructor() {
    this.selected.valueChanges.subscribe({
      next: (val) => {
        this.result.emit(val);
      }
    })
  }
}
