import {CollectionModel} from "./model";
import {Inventory} from "./inventory";

export class User extends CollectionModel {
  name: string;
  inventory: Inventory;

  constructor(name: string, inventory?: Inventory) {
    super();
    this.name = name;
    this.inventory = inventory || new Inventory();
  }
}
