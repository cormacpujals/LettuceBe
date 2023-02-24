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
    const id = await db.addUser(user);
    expect(id).not.toBeNull();

    const users = await db.getUsers();
    expect(users.length).toBe(2);

    expect(users[0].name).toEqual("Tony");
    expect(users[1].name).toEqual("Cormac");
  });

  test("add product", async () => {
    const product = new Product("cheese", "dairy", 7);
    const somethingHere = await db.addProduct(product)
    expect(product.name).toBe("cheese");
    expect(product.category).toBe("dairy");
    expect(product.expiration).toBe(7);
  })
});
