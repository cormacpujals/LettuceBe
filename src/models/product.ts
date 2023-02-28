import {Item} from "./item";
import {CollectionModel} from "./model";


export type Category = "dairy" | "meat" | "poultry";
export type Expiration = number;
export type SafetyColor = "red" | "yellow" | "green";


export class Product extends CollectionModel {
  name: string;
  category: Category;
  expiration: Expiration;

  constructor(name: string, category: Category, expiration: Expiration) {
    super();
    this.name = name;
    this.category = category;
    this.expiration = expiration;
  }

  static generateUserItem(name: string, category: Category): Item | null {
    // @ts-ignore (not dom name)
    const item = new Item(name);
    // check your product inventory, return null if not valid
    // return null

    item.dateAdded = Date.now();
    item.dateExpires = 0; // compute date it expires
    return item;
  }

  static getProducts(): Product[] {
    return Products;
  }

  getDaysUntilExpiration() {
    return this.expiration - Date.now();
  }

  getSafetyColor(): SafetyColor {
    const daysLeft = this.getDaysUntilExpiration();
    if (daysLeft <= 0) return "red";
    if (daysLeft < 2) return "yellow";
    return "green";
  }
}

function P(name: string, category: Category, expiration: number) {
  return new Product(name, category, expiration);
}


const Products: Product[] = [
  // dairy
  P("milk", "dairy", 7),
  P("eggs", "dairy", 14),

  // poultry
  P("chicken", "poultry", 5),

  // beef
  P("hamburger", "meat", 5),
  P("steak", "meat", 5),
];
