import {ObjectId} from "mongodb";

import {Inventory} from "./inventory";

export class User {
  _id?: ObjectId;
  name: string;
  inventory: Inventory;

  constructor(name: string, inventory?: Inventory) {
    this.name = name;
    this.inventory = inventory || new Inventory();
  }
}
