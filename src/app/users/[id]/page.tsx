import {MagicUserId} from "../../../../scripts/seed";
import {Inventory} from "../../../models/inventory";
import {ObjectId} from "mongodb";

// TODO use MagicUserId hardcoded for now


async function getUser(id: string | ObjectId) {
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
  if(!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function User(params: any) {
  console.log(`requested id: ${params['id']}`);
  // HACK: ignore passed in id and use MagicUserId
  const user : {name: string, inventory: Inventory} = await getUser(MagicUserId);
  console.log(user)
  return (
      <div>
        {user.name}
        <div>{JSON.stringify(user.inventory)}</div>
      </div>
  )
}
