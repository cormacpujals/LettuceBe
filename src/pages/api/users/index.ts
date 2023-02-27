import type {NextApiRequest, NextApiResponse} from "next";
import {Database, Result} from "../../../lib/database";
import {User} from "../../../models/user";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Result>
) {
  if (req.method === "GET") {
    // get all users

  } else if (req.method === "POST") {
    // add a new user
    let db = new Database();
    try {
      await db.connect();

      const user = req.body as User;
      const result = await db.addUser(user);
      if (!result.success) {
        console.error(`error: ${result.reason}`);
        return res.status(500).json(result);
      }
      return res.json(result);
    } catch (error) {
      console.log(error);
      return res.status(500).json(Result.fail("server error"));
    } finally {
      await db.close();
    }
  }
}
