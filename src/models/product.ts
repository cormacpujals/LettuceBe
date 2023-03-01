import {Item} from "./item";
import {CollectionModel} from "./model";


export type Category = "dairy" | "mps" | "produce" | "pantry";
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
  P("Milk", "dairy", 7),
  P("Eggs", "dairy", 35),
  P("Heavy Cream", "dairy", 30),
  P("Ricotta", "dairy", 7),
  P("Yogurt", "dairy", 14),

  // meat, poultry, seafood
  P("Chicken", "mps", 2),
  P("Ground Beef", "mps", 2),
  P("Steak", "mps", 3),
  P("Bacon", "mps", 14),
  P("Cold Cuts", "mps", 14),

  // produce
  P("Apples", "produce", 21),
  P("Blueberries", "produce", 7),
  P("Bananas", "produce", 5),
  P("Broccoli", "produce", 7),
  P("Cauliflower", "produce", 7),

  // pantry
  P("Ketchup", "pantry", 180),
  P("Maple Syrup", "pantry", 360),
  P("Olive Oil", "pantry", 360),
  P("Honey", "pantry", 360),
  P("Vinegar", "pantry", 720),
];

