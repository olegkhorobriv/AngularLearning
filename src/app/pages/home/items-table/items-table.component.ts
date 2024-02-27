import {Component, Input} from '@angular/core';
import {Item} from "../../../@models/item.interface";


@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.scss']
})
export class ItemsTableComponent {

  @Input() displayedColumns: string[] = []
  @Input() dataSource: Item[] = [];

  icons = {
    grocery: 'store',
    medical: 'medical_services',
    book: 'auto_stories'
  }

}
