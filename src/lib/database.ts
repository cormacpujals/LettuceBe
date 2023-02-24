import {MongoClient, Collection, Db, ObjectId} from "mongodb";

import {User, Inventory, Item} from "../models/models";

const defaultUri = process.env["DB_URI"];
const usersCollectionName = "users";

export class Database {
  static readonly dbName = "food";
  uri: string;
  client: MongoClient;
  db?: Db;
  users?: Collection;

  constructor(uri?: string) {
    uri = uri || defaultUri;
    if (!uri) {
      throw new Error("Provide a uri or set DB_URI");
    }
    this.uri = uri;
    this.client = new MongoClient(uri, {w: "majority"});
  }

  async connect(): Promise<void> {
    console.log("Connecting to database...");
    await this.client.connect();
    console.log("Connected.");
    this.db = this.client.db(Database.dbName);
    this.users = this.db.collection(usersCollectionName!);
  }

  async close(): Promise<void> {
    await this.client.close();
  }

  async getUsers(): Promise<User[]> {
    // TODO: implement paging with the cursor
    return await this.users!.find({}).toArray() as User[];
  }

  async addUser(user: User): Promise<ObjectId | null> {
    const result = await this.users!.insertOne(user);
    return result.acknowledged ? result.insertedId : null;
  }
}
