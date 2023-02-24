import {Database} from "../src/lib/database";
import {User, Inventory, Item} from "../src/models/models";

describe("database module", () => {
  test("add user", async () => {
    const db = new Database();
    await db.connect();

    const user = new User("Tony");
    const id = await db.addUser(user);
    expect(id.length).not.toBe("");

    const users = await db.getUsers();
    expect(users.length).toBe(1);

    // console.log(JSON.stringify(db));
    // console.log(JSON.stringify(users));
    expect(users[0].name).toEqual("Tony");
  });
});
