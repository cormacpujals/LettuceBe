import {ObjectId} from "mongodb";
import type {NextApiRequest, NextApiResponse} from "next";

import {Database, Result} from "../../../lib/database";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Result>
) {
  if (req.method === "GET") {
    const {id} = req.query;
    console.log(`id: ${id} => ${new ObjectId(id as string)}`);
    let db = new Database();
    try {
      await db.connect();
      const result = await db.getUserId(new ObjectId(id as string));
      if (!result.success) {
        console.log(`get user id ${id} failed: ${result.reason}`);
        return res.status(404).json(result);
      }
      console.log(`success: get user api: ${JSON.stringify(result)}`);
      return res.json(result);
    } catch (error) {
      console.log(error);
      return res.status(500);
    } finally {
      await db.close();
    }
  }
}
