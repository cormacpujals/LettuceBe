import {get} from "../../../lib/http";
import {User} from "../../../models/user";
import ShelfItem from "../../../components/ShelfItem";
import ItemNavBar from "./components/ItemNavBar";

async function getUser(id: string): Promise<User> {
  const url = `http://localhost:3000/api/users/${id}`;
  const response = await get(url);
  if (!response.ok) {
    throw new Error(response.status);
  }

  const result = await response.json();
  if (!result.success) {
    throw new Error(result.reason);
  }

  return result.data as User;
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const id = params.id;
  const user = await getUser(id);
  console.log(user);

  return (
      <div className="mx-2">
        <h3 className="border-b">{user.name}&apos;s Products</h3>
        {/* @ts-expect-error Server Component */}
        <ItemNavBar/>
        {/* @ts-expect-error Server Component */}
        <ShelfItem/>
      </div>
  );
}
