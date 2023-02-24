export class Item {
  name: string;
  dateAdded: number;
  dateExpires?: number; // computation is deferred

  constructor(name:string) {
    this.name = name;
    this.dateAdded = Date.now();
  }
}
