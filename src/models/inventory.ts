import {Item} from "./item";

export class Inventory {
  items: Item[];

  constructor(items?: Item[]) {
    this.items = items || [];
  }
}
