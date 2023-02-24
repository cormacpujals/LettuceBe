import dotenv from "dotenv";
dotenv.config();

import {Database} from "../src/lib/database";
import {User, Inventory, Item} from "../src/models/models";

const uri = process.env["DB_TEST_URI"];
if (!uri) {
  console.log("ERROR: DB_URI not set.")
  process.exit(1);
}

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
  let result = await users.insertMany([
    user,
  ]);

  await db.close();
  console.log("Done.");
}

export async function seedFdaData() {
  // TODO: https://github.com/subfuzion/simple-next-mongo-demo/issues/11
  await ingredients.insertMany([
    new Ingredient("milk", "dairy", "7"),
    new Ingredient("milk", "dairy", "14"),
    new Ingredient("milk", "dairy", "1w"),
    new Ingredient("milk", "dairy", "1w"),
    {
      "name",
      "category",
      "expiration",
    },
    {

    },
  ]);
}
