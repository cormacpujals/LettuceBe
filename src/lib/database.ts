import {User} from "../models/user";
import { v4 as ID } from 'uuid';

// MOCK
export type ObjectId = string;

export class Database {
  // MOCK
  db?: {
    users: User[]
  }

  async connect() {
    // MOCK
    this.db = {
      users: []
    }
    Promise.resolve(true);
  }

  async addUser(user: User): Promise<ObjectId> {
    // MOCK adding _id
    user._id = ID();

    const users = await this.getUsers();
    users.push(user);
    return Promise.resolve(user._id);
  }

  /**
   * Constraint: must be connected to database
   */
  async getUsers(): Promise<User[]> {
    return Promise.resolve(this.db!.users);
  }
}
