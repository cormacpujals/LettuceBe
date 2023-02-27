import {Collection, Db, MongoClient, ObjectId} from "mongodb";

import {Product, User} from "../models/models";


const defaultUri = process.env["DB_URI"];
const usersCollectionName = "users";
const productsCollectionName = "products";


export class Result {
  success: boolean;
  data?: any;
  reason?: string;

  private constructor(success: boolean, data?: {}, reason?: string) {
    this.success = success;
    this.data = data;
    this.reason = reason;
  }

  static success(data: {}) {
    return new Result(true, data);
  }

  static fail(reason: string = "") {
    return new Result(false, undefined, reason);
  }
}


export class Database {
  static readonly dbName = "food";
  uri: string;
  client: MongoClient;
  db?: Db;
  users?: Collection;
  products?: Collection;

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
    // In case we want to forcibly override for testing maybe
    // this.db = this.client.db(Database.dbName);
    this.db = this.client.db();
    this.users = this.db.collection(usersCollectionName)!;
    this.products = this.db.collection(productsCollectionName)!;
  }

  async close(): Promise<void> {
    await this.client.close();
  }

  async addUser(user: User): Promise<Result> {
    // due to string serialization, always ensure _id is an ObjectId
    user._id = new ObjectId(user._id);
    const result = await this.users!.insertOne(user);
    if (!result.acknowledged) {
      return Result.fail("empty result");
    }
    return Result.success({
      id: result.insertedId,
    });
  }

  async getUserId(id: ObjectId | string): Promise<Result> {
    // due to string serialization, always ensure _id is an ObjectId
    id = new ObjectId(id);
    console.log(`getUserId: ${id}`);
    const result = await this.users!.findOne({_id: id});
    console.log(`database getUser(${id}) => result: ${result}`);
    if (!result) {
      console.log(`error: database getUser(${id}) => empty result`);
      return Result.fail("empty result");
    }
    return Result.success(result);
  }

  async getUserName(name: string): Promise<Result> {
    const result = await this.users!.findOne({name: name});

    if (!result) {
      console.log(`error: database getUser(${name}) => empty result`);
      return Result.fail("empty result");
    }
    return Result.success(result);
  }

  async getUsers(): Promise<User[]> {
    // TODO: implement paging with the cursor
    return await this.users!.find().toArray() as User[];
  }

  async updateUser(user: User) {
    // TODO
  }

  async getProducts(): Promise<Product[]> {
    return await this.products!.find().toArray() as Product[];
  }

  async addProduct(product: Product) {
    const result = await this.products!.insertOne(product);
  }

}
