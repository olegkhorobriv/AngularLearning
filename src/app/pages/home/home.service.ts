import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Item} from "../../@models/item.interface";
import {ITEMS_MOCK} from "../../@mock-data/items.mock";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  newItems: Item[] = ITEMS_MOCK;

  itemsSubj = new BehaviorSubject<Item[]>(undefined);
  items$ = this.itemsSubj.asObservable();

  constructor() {
    this.itemsSubj.next(this.newItems);
  }

  setValue(val: Item) {
    this.newItems.push(val);
    this.itemsSubj.next(this.newItems);
  }
}
