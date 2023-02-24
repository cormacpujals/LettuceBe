import {seedSampleData} from "../scripts/seed";
import {Database} from "../src/lib/database";
import {User, Inventory, Item} from "../src/models/models";

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

  test("get ingredient", () => {
    const shelf = await db.getIngredient("milk");
    expect(shelf.category).toBe("dairy"));
    expect(shelf.expiration).toBe(7);
  })
});
