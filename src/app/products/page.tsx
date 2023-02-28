import {Product} from "../../models/product";


export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const products = Product.getProducts();

  return (
      <div>
        <div>{products.map((p, i) => <span key={i}>{p.name}</span>)}</div>
      </div>
  );
}
