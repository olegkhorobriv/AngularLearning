import {Item} from "../@models/item.interface";
import {Types} from "../@models/types.enum";

export const ITEMS_MOCK: Item[] = [
  {
    id: 1,
    name: 'Цибуля',
    type: Types.grocery,
    quantity: '2кг',
    toBuy: true,
    createdAt: new Date()
  },
  {
    id: 2,
    name: 'Вода',
    type: Types.grocery,
    quantity: '6л',
    toBuy: false,
    createdAt: new Date()
  },
  {
    id: 3,
    name: 'Аспірин',
    type: Types.medical,
    quantity: '1 пачка',
    toBuy: true,
    createdAt: new Date()
  },
  {
    id: 4,
    name: 'Шоколадка',
    type: Types.grocery,
    quantity: '1шт',
    toBuy: false,
    createdAt: new Date()
  },
]
