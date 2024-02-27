import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Item} from "../../@models/item.interface";
import { ITEMS_MOCK } from '../../@mock-data/items.mock';
import {ListItem} from "../../@models/list-item.interface";
import {Types} from "../../@models/types.enum";

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss'],

})

export class ViewItemComponent implements OnInit {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: Item[] = [];
  icons = {
    grocery: 'store',
    medical: 'medical_services',
    book: 'auto_stories'
  };
  types: ListItem[] = [
    { value: Types.grocery, name: 'Продукти'},
    { value: Types.medical, name: 'Ліки'},
    { value: Types.book, name: 'Книги'},
  ]

  itemId: string;
  selectedProduct: Item;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');
    const splittedId = this.itemId.split(':');
    const cleanId = splittedId[splittedId.length - 1];
    this.selectedProduct = ITEMS_MOCK.find(item => item.id.toString() === cleanId);
  }
  getTypeName(Value: string): string {
    const type = this.types.find(item => item.value === Value);
    return type.name;
  }
}




