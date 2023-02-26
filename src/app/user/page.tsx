import {MagicUserId} from "../../../scripts/seed";
import {Inventory} from "../../models/inventory";

// TODO use MagicUserId hardcoded for now


async function getUser() {
  const res = await fetch('http://localhost:3000/api/user');
  if(!res.ok) {
    console.log(res);
  }
  return res.json();
}

export default async function User() {
  const user : {name: string, inventory: Inventory} = await getUser();
  console.log(user)
  return (
      <div>
        {user.name}
        <div>{JSON.stringify(user.inventory)}</div>
      </div>
  )
}
