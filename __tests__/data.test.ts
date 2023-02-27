import {ObjectId} from "mongodb";
import {seedSampleData, seedFdaData} from "../scripts/seed";
import {Database} from "../src/lib/database";
import {User, Inventory, Item, Product} from "../src/models/models";
//import { get, post } from "src/lib/http";
import { post } from "src/lib/http";
// import userHandler from "src/pages/api/users/[id]";
// import {MagicUserId} from "../scripts/seed";


// Integration tests must run in sequence, so ensure jest is running with
// the --runInBand option.
describe("integration tests", () => {
  let db: Database;

  beforeAll(async () => {
    await seedSampleData();
    await seedFdaData();
  });


  describe("database tests", () => {
    const userName = "Cormac";
    let userId: ObjectId;
    let userItem: Item;

    beforeAll(async () => {
      db = new Database();
      await db.connect();
    });

    afterAll(async () => {
      await db.close();
    });

    test("add user", async () => {
      const user = new User(userName);
      userId = new ObjectId();
      user._id = userId;

      userItem = new Item("milk");
      userItem.dateAdded = Date.now();
      userItem.dateExpires = 7;
      user.inventory.addItem(userItem);

      const result = await db.addUser(user);
      expect(result.success).toBeTruthy();
      expect(result.data.id).toEqual(userId);
    });

    test("get users", async () => {
      const users = await db.getUsers();
      const user = users.find(u => u.name === userName);
      expect(user).not.toBeNull();
      expect(user!._id).toEqual(userId);

      const items = user!.inventory.items;
      const item = items.find(i => i.name === userItem.name);
      expect(item).not.toBeNull();
    });

    test("get user", async () => {
      const result = await db.getUserId(userId.toString())
      expect(result.success).toBeTruthy()

      const user = result.data as User;
      expect(user).not.toBeNull();
      expect(user!._id).toEqual(userId);
      expect(user!.name).toEqual(userName);
    });
  });

  describe("api tests", () => {
    const userName = "Catherine";
    let userId: ObjectId;
    let userItem: Item;

    test("add user api", async () => {
      const user = new User(userName);
      userId = new ObjectId();
      user._id = userId;
      console.log(`created id: ${userId}`);

      userItem = new Item("milk");
      userItem.dateAdded = Date.now();
      userItem.dateExpires = 7;
      user.inventory.addItem(userItem);

      const url = `http://localhost:3000/api/users`;
      const response = await post(url, user);
      expect(response.ok).toBeTruthy();

      // result is the database Result in the response body
      const result = await response.json();
      expect(result.success).toBeTruthy();
      expect(result.data.id).toEqual(userId.toString());
      console.log(`id: ${result.data.id}`);
    });

    test("get user api", async () => {
      const url = `http://localhost:3000/api/users/${userId}`;
      const response = await get(url);
      expect(response.ok).toBeTruthy();

      const result = await response.json();
      expect(result.success).toBeTruthy();

      const user = result.data as User;
      expect(user.name).toEqual(userName);

      const items = user.inventory.items;
      expect(items[0].name).toEqual("milk");
      expect(items[0].dateExpires).toBe(7);
    });
  });

  test.skip("add product", async () => {
    const product = new Product("cheese", "dairy", 7);
    const somethingHere = await db.addProduct(product)
    expect(product.name).toBe("cheese");
    expect(product.category).toBe("dairy");
    expect(product.expiration).toBe(7);
  });


  test.skip("add item", async () => {
    // users clicks product, product is added as an item under users inventory

  })
});
export async function get(url: string): Promise<any> {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
}
