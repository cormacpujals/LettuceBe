import {ObjectId} from 'mongodb';
import type {NextApiRequest, NextApiResponse} from 'next';
import {Inventory} from '../../../models/inventory';
import {Database} from '../../../lib/database';
import {User} from "../../../models/user";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  if (req.method === 'GET') {
    const {id} = req.query;
    console.log(id);


    // MOCK 1 (raw object)
    // const user = {
    //   _id: id,
    //   name: "Tony",
    //   inventory: {
    //     items: [
    //       {
    //         name: "milk",
    //         dateAdded: Date.now(),
    //         dateExpires: 7,
    //       }
    //     ],
    //   },
    // } as unknown as User;

    // MOCK 2 (typed object)
    const u = new User("Tony");
    const item = u.addItem("milk", "dairy")!;
    item.dateExpires = 7;
    return res.json(u);

    // TODO: this code works, will replace mock after all mocks are ready
    // try {
    //   let db = new Database();
    //   await db.connect();
    //   const users = await db.getUsers();
    //   const user = users[0];
    //   return res.json(user);
    // } catch (error) {
    //   console.log(error)
    // }
  }
}
