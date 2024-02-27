import {Types} from "./types.enum";

export interface Item {
  id: number;
  name: string;
  type: Types;
  quantity: string;
  toBuy: boolean;
  createdAt: Date;
}
