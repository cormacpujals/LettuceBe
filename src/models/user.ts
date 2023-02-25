import {CollectionModel} from "./model";
import {Inventory} from "./inventory";
import {Item} from "./item";
import {Product, Category} from "./product";

export class User extends CollectionModel {
  name: string;
  inventory: Inventory;

  constructor(name: string, inventory?: Inventory) {
    super();
    this.name = name;
    this.inventory = inventory || new Inventory();
  }

  addItem(name: string, category: Category): Item | null {
    const item = Product.generateUserItem(name, category);
    if (!item) return null;
    this.inventory.addItem(item);
    return item;
  }
}
