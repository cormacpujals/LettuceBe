// TODO implement GET user for list page
import type {NextApiRequest, NextApiResponse} from 'next';
import {Inventory} from '../../models/inventory';
import {Database} from '../../lib/database';



type User = {
  name: string,
  inventory: Inventory;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  if (req.method === 'GET') {
    try {
      let db = new Database();
      await db.connect();
      const users = await db.getUsers();
      const user = users[0];
      return res.json(user);
    } catch (error) {
      console.log(error)
    }
  }
}
