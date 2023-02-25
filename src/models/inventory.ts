import {Item} from "./item";

export class Inventory {
  items: Item[];

  constructor(items?: Item[]) {
    this.items = items || [];
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  getItems(): Item[] {
    return this.items;
  }
}
