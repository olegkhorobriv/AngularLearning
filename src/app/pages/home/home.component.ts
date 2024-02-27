import {Component, OnInit} from '@angular/core';
import {Item} from "../../@models/item.interface";
import {ITEMS_MOCK} from "../../@mock-data/items.mock";
import {take} from "rxjs";
import {HomeService} from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  displayedColumns: string[] = ['name', 'quantity', 'toBuy', 'createdAt'];
  dataSource: Item[] = [];

  header = 'Список'

  constructor(
    private homeService: HomeService
  ) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.homeService.items$
      .pipe(take(1))
      .subscribe({
        next: (list) => {
          this.dataSource = list;
        }
      })
  }
}
