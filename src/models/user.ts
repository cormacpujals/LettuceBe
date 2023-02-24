import {Inventory} from "./inventory";

// MOCK - delete later and import from MongoDB
// import { ObjectId } from "mongodb";
export type ObjectId = string;

export class User {
  _id: ObjectId = "";
  name: string;
  inventory: Inventory;

  constructor(name: string, inventory?: Inventory) {
    this._id = "";
    this.name = name;
    this.inventory = inventory || new Inventory();
  }
}
