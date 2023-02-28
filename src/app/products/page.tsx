'use client';
import {Category, Product} from "../../models/product";

function addProduct(e: any) {
  console.log(`need this function to capture the product (${e}) and
              add it to a user's Inventory`)
  console.log(e.target.innerHTML)
}
export default function Products() {
// {
//   params,
//   searchParams,
// }: {
//   params: { id: string };
//   searchParams?: { [key: string]: string | string[] | undefined };
// }) {
//   const products = Product.getProducts();

  const products : {name: string, category: Category, expiration: number}[] = [
    {
      name: "Milk",
      category: "dairy",
      expiration: 10,
    },
    {
      name: "Eggs",
      category: "dairy",
      expiration: 14,
    },
    {
      name: "Chicken",
      category: "mps",
      expiration: 5,
    },
    {
      name: "Hamburger",
      category: "mps",
      expiration: 3,
    },
    {
      name: "Steak",
      category: "mps",
      expiration: 3,
    },
    {
      name: "Blueberries",
      category: "produce",
      expiration: 12,
    },
    {
      name: "Bananas",
      category: "produce",
      expiration: 12,
    },
    {
      name: "Kiwis",
      category: "produce",
      expiration: 10,
    },
    {
      name: "Apples",
      category: "produce",
      expiration: 10,
    },
    {
      name: "Brown Rice",
      category: "pantry",
      expiration: 180,
    },
    {
      name: "Ketchup",
      category: "pantry",
      expiration: 360,
    },
  ]
  return (
      <div className="">
        <h1 className="text-xl text-center mx-2 my-4">Tap to add foods to your tracker!</h1>
        <h2 className="text-lg m-2">Produce</h2>
        <div className="grid grid-cols-3 mt-3 mb-3">
          {products.filter(product =>
              product.category === "produce").map((p, idx) =>
              <button
                  className="bg-yellow-200 rounded-md mx-2 my-2"
                  onClick={e => addProduct(e)}
                  key={idx}
              >
                {p.name}
              </button>)}
        </div>
        <h2 className="text-lg m-2">Meat, Poultry, Seafood</h2>
        <div className="grid grid-cols-3 mt-3 mb-3">
          {products.filter(product =>
              product.category === "mps").map((p, idx) =>
              <button
                  className="bg-yellow-200 rounded-md mx-2 my-2"
                  onClick={e => addProduct(e)}
                  key={idx}
              >
                {p.name}
              </button>)}
        </div>
        <h2 className="text-lg m-2">Dairy</h2>
        <div className="grid grid-cols-3 mt-3 mb-3">
          {products.filter(product =>
              product.category === "dairy").map((p, idx) =>
              <button
                  className="bg-yellow-200 rounded-md mx-2 my-2"
                  onClick={e => addProduct(e)}
                  key={idx}
              >
                {p.name}
              </button>)}
        </div>
        <h2 className="text-lg m-2">Pantry</h2>
        <div className="grid grid-cols-3 mt-3 mb-3">
          {products.filter(product =>
              product.category === "pantry").map((p, idx) =>
              <button
                  className="bg-yellow-200 rounded-md mx-2 my-2"
                  onClick={e => addProduct(e)}
                  key={idx}
              >
                {p.name}
              </button>)}
        </div>
      </div>
  );
}






















