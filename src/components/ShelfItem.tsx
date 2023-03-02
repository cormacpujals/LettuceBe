import { Inventory } from "../models/inventory";

// async function getUser() {
//   const res = await fetch('http://localhost:3000/api/user');
//   if(!res.ok) {
//     console.log(res);
//   }
//   return res.json();
// }

const items: { name: string, dateAdded: Date, dateExpires: number }[] = [
  {
    name: "Milk",
    dateAdded: new Date,
    dateExpires: 10,
  },
  {
    name: "Brown Rice",
    dateAdded: new Date,
    dateExpires: 10,
  },
  {
    name: "Beef",
    dateAdded: new Date,
    dateExpires: 10,
  },
  {
    name: "Bananas",
    dateAdded: new Date,
    dateExpires: 10,
  },
  {
    name: "Chicken",
    dateAdded: new Date,
    dateExpires: 10,
  },
]
export default async function ShelfItem() {
  // const user : {name: string, inventory: Inventory} = await getUser();
  // const items : {name: string, dateAdded: number, dateExpires?: number}[] = user.inventory.items;
  return (
    <>
      {items.map((item, idx) =>
        <div key={idx} className="border-b mx-6 text-black-300 grid grid-flow-row">
          <div className="mx-4 h-[25px]">
            <div className="text-reg px-6 float-left">{item.name}</div>
            <div className="text-xsm float-right">Added On {item.dateAdded.toLocaleDateString()}</div>
          </div>
          <div className="mx-4 h-[25px]">
            <div className="bg-blue-400 w-[15%] h-[22px] border rounded p-2 float-left">{/* Expiration */} </div>
            <div className="bg-red-400 text-white border rounded p-2 w-[15%] h-[22px] float-right">{/* Remove */} </div>
          </div>
        </div>
      )}
    </>
  )
}
