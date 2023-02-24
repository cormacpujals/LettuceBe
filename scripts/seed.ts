import dotenv from "dotenv";
dotenv.config();

import {Database} from "../src/lib/database";
import {User, Inventory, Item} from "../src/models/models";

const uri = process.env["DB_TEST_URI"];
if (!uri) {
  console.log("ERROR: DB_URI not set.")
  process.exit(1);
}

export async function seed() {
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
