import dotenv from "dotenv";
import {ObjectId} from "mongodb"
dotenv.config();

import {Database} from "../src/lib/database";
import {User, Inventory, Item, Product} from "../src/models/models";
import {Category, Expiration} from "../src/models/product";

const uri = process.env["DB_URI"];
if (!uri) {
  console.log("ERROR: DB_URI not set.")
  process.exit(1);
}
if (!uri.includes("-test")) {
  console.log("ERROR: DB_URI database name component must contain '-test' (ex: mongodb.net/cormac-test) for now.");
  process.exit(1);
}

export const MagicUserId = new ObjectId();

export async function seedSampleData() {
  const db = new Database(uri);
  await db.connect();

  try {
    await db.users!.drop();
  } catch (_) {
    // ignore
  }

  const users = db.users!;

  console.log("Seeding database...");

  let user = new User("Tony");
  user._id = MagicUserId;
  // TODO: add my inventory of items
  let item = user.addItem("milk", "dairy");
  item!.dateExpires = 7;
  if (!item) throw new Error(`unable to add item: milk, dairy`);

  let result = await users.insertMany([
    user,
  ]);

  await db.close();
  console.log("Done.");
}


export async function seedFdaData() {
  // TODO: https://github.com/subfuzion/simple-next-mongo-demo/issues/11
  const db = new Database(uri);
  await db.connect();

  try {
    await db.products!.drop()
  } catch(_) {

  }

  const products = db.products!;

  console.log("Seeding db...")

  let product = new Product("milk", "dairy", 7)
  let productTwo = new Product("eggs", "dairy", 14)
  let result = await products.insertMany([
    product,
    productTwo,
  ]);

  // let result = await products.insertMany([
  //   {
  //     _id: new ObjectId(),
  //     category: "dairy",
  //     name: "milk",
  //     expiration: 7,
  //   },
  //   {
  //     _id: new ObjectId(),
  //     category: "poultry",
  //     name: "chicken",
  //     expiration: 5,
  //   }
  // ]);

  await db.close();
  console.log("Done.")
}
