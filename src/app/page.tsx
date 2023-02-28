import * as http from "http";
import {Inter} from "next/font/google";
import Link from "next/link";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  return (
      <main>
        <Link href={'http://localhost:3000/users/63fd3735361acdd7adfce20e'}>Click to see test user shelf</Link>
        <br/>
        <Link href={'http://localhost:3000/products'}>Click to see products (from which users will be able to add)</Link>
      </main>
  );
}
