import Link from "next/link";

export default function ItemNavBar({ id }: { id: string }) {
  return (
    <nav className="flex text-lg pb-2 ml-8">
      <Link href={`/users/${id}`} className="mr-7 underline">
        Current Ingredients
      </Link>
      <Link href={`/users/${id}/favorite`} className="mr-7">
        Frequently Used
      </Link>
    </nav>
  );
}
