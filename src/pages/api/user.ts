import {ObjectId} from 'mongodb';
import type {NextApiRequest, NextApiResponse} from 'next';
import {Inventory} from '../../models/inventory';
import {Database} from '../../lib/database';
import {User} from "../../models/user";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  if (req.method === 'GET') {
    // try {
    //   let db = new Database();
    //   await db.connect();
    //   const users = await db.getUsers();
    //   const user = users[0];
    //   return res.json(user);
    // } catch (error) {
    //   console.log(error)
    // }

    // MOCK
    // const u = new User("Tony");
    // const item = u.addItem("milk", "dairy");
    // item!.dateExpires = 7;
    // return res.json(u);

    let user = {
      name: "Tony",
      inventory: {
        items: [
          {
            name: "milk",
            dataAdded: Date.now(),
            dateExpires: 7,
          }
        ],
      },
    } as unknown as User;

    return res.json(user);
  }
}
