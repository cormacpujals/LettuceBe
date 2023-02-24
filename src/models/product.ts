import {CollectionModel} from "./model";

type Category = "dairy" | "meat" | "poultry";
type Expiration = number;
type SafetyColor = "red" | "yellow" | "green";

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

  getDaysUntilExpiration() {
    return this.expiration - Date.now();
  }

  getSafetyColor(): SafetyColor {
    const daysLeft = this.getDaysUntilExpiration();
    if (daysLeft <= 0) return "red"
    if (daysLeft < 2) return "yellow"
    return "green"
  }

}