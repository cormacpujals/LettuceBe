import {ObjectId} from "mongodb";
import {seedSampleData, seedFdaData} from "../scripts/seed";
import {Database} from "../src/lib/database";
import {User, Inventory, Item, Product} from "../src/models/models";

describe("database module", () => {
  let db: Database;

  beforeAll(async () => {
    await seedSampleData();
    await seedFdaData();
    db = new Database();
    await db.connect();
  });

  afterAll(async () => {
    await db.close();
  })

  test("add user", async () => {
    const user = new User("Cormac");
    const cormacId = new ObjectId();
    user._id = cormacId;
    const id = await db.addUser(user);
    expect(id).toEqual(cormacId);
    
    const users = await db.getUsers();
    // Because we seeded one already
    expect(users.length).toBe(2);

    let u = users[1];
    expect(u.name).toEqual("Cormac");
    expect(u._id).toEqual(cormacId);

  });

  test("add product", async () => {
    const product = new Product("cheese", "dairy", 7);
    const somethingHere = await db.addProduct(product)
    expect(product.name).toBe("cheese");
    expect(product.category).toBe("dairy");
    expect(product.expiration).toBe(7);
  })
});

